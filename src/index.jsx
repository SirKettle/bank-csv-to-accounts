import '@babel/polyfill';
import 'sanitize.css/sanitize.css';
import * as React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { Provider } from 'react-redux';
import { App } from 'components/App';
import { configureStore } from './state/configureStore';

const mountNode = document.getElementById('app');

const renderApp = (isHot = false) => {
  const store = configureStore();
  render(
    <Provider store={store}>
      <App isHot={isHot} />
    </Provider>,
    mountNode,
  );

  console.log(`“Accounting Utility” by Will Thirkettle - v${process.env.BUILD_VERSION} - ${process.env.NODE_ENV}`);
};

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('components/App', () => {
    unmountComponentAtNode(mountNode);
    renderApp();
  });
}

renderApp();
