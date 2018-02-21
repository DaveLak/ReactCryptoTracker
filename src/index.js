import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css';

import configureStore from './redux/store/configureStore';
// import registerServiceWorker from './registerServiceWorker';
import App from './components/App';
import './index.css';

// Set up our Redux store
const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
// registerServiceWorker();
