import { getTag } from './getTag';
import { tagConfig } from './config';

const DOWNLOAD_CSV_LABEL = ['date', 'summary', 'ref', 'amount', 'balance'];
const tryParseNumber = str => {
  // const removeChars = str.replace(/"/gi, '').replace(/,/gi, '');
  // console.log('removeChars', removeChars)
  return isNaN(str) ? str : Number(str)
};

const transformLine = values =>
  values.reduce(
    (acc, item, index) => ({
      ...acc,
      [DOWNLOAD_CSV_LABEL[index]]: tryParseNumber(item),
    }),
    {},
  );

const addTag = datum => ({
  ...datum,
  tag: getTag(datum),
});

const addCategory = datum => ({
  ...datum,
  category: datum.tag ? tagConfig[datum.tag].category : datum.tag,
});

export const parseCsv = csv => {
  // console.log('csv', csv);
  // console.log('csv split', csv
  //   .split('\n')
  //   .map(line => line.split(','))
  //   .map(item => item.length));
  return csv
    .split('\n')
    .map(line => line.split(','))
    .filter(item => item.length === 5)
    .map(transformLine)
    .map(addTag)
    .map(addCategory);
}
