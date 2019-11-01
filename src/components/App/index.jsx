import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled, { createGlobalStyle } from 'styled-components';
import { actions as configActions } from 'state/domain/config/action';
import * as configSelectors from 'state/domain/config/selector';
import { Copy, Heading, Headline, Paragraph, Quote, SmallPrint } from '../typography';
import { Loading } from '../Loading';
import { parseCsv } from '../../../nodeApp/parseCsv';
import { paidLines, tagAccountingLines } from '../../../nodeApp/tagAccountingLines';

const GlobalStyle = createGlobalStyle`
  body {
    background: darkslategrey;
    color: yellow;
    line-height: 1.5;
  }
`;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const DropZone = styled.div`
  width: 80%;
  height: 300px;
  border: dotted 10px rgba(255, 255, 255, 0.2);
  margin: 25px;

  &:hover {
    border-color: rgba(255, 255, 255, 0.5);
  }
`;

const CsvContents = styled.textarea`
  width: 80%;
  height: 200px;
`;

const ExcelFormat = styled.textarea`
  width: 80%;
  height: 300px;
`;

export const _App = ({ isHot, getConfig, configLoadingStatus }) => {
  const [csvContents, setCsvContents] = React.useState('');
  const [paid, setPaid] = React.useState('');
  const [parsed, setParsed] = React.useState('');

  React.useEffect(() => {
    getConfig();
  }, []);

  React.useEffect(() => {
    const data = parseCsv(csvContents);
    setPaid(paidLines(data));
    setParsed(tagAccountingLines(data));
  }, [csvContents]);

  const handleFile = file => {
    console.log('Processing CSV: ', file.name, file.type, file.size);
    const reader = new FileReader();
    reader.onload = event => {
      setCsvContents(event.target.result);
    };
    reader.readAsBinaryString(file);
  };

  const handleDragEnter = React.useCallback(e => {
    e.stopPropagation();
    e.preventDefault();
  }, []);

  const handleDragOver = React.useCallback(e => {
    e.stopPropagation();
    e.preventDefault();
  }, []);

  const handleDrop = React.useCallback(e => {
    e.stopPropagation();
    e.preventDefault();

    const dt = e.dataTransfer;
    handleFile(dt.files[0]);
  }, []);

  return (
    <Page>
      <GlobalStyle />
      <Loading status={configLoadingStatus}>
        <Heading as="h1" color="green">
          Accounts Utility
        </Heading>
        <Paragraph>Drop the CSV file downloaded fro Cater Allen here:</Paragraph>
        <DropZone onDragEnter={handleDragEnter} onDragOver={handleDragOver} onDrop={handleDrop} />
        <Heading as="h3">Original CSV contents check:</Heading>
        <CsvContents value={csvContents} />
        <Headline as="h3">Converted to excel format!</Headline>
        <ExcelFormat value={parsed} />
        <Heading as="h3">Payments received</Heading>
        <ExcelFormat value={paid} />
      </Loading>
    </Page>
  );
};

const mapStateToProps = createStructuredSelector({
  configLoadingStatus: configSelectors.loadingSelector,
});

const mapDispatchToProps = {
  getConfig: configActions.getConfig,
};

export const App = connect(
  mapStateToProps,
  mapDispatchToProps,
)(_App);
