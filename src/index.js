import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css'
import Routes from './Routes';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider  } from 'react-redux';
import counterApp from './reducers';

const store = createStore(counterApp);

ReactDOM.render(
  <Provider store = {store}>
    <Routes />
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
