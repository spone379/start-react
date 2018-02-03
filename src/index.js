import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import store from 'store';
import { history } from 'store';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import App from './App';





ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter> 
  </Provider>,
  document.getElementById('root')
);

