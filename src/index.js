import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './stores/stores';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

// For development, give easy access to see whats in the state store without redux devtool
window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// GET THIS WORKING IN DEVELOPMENT MODE: https://www.freecodecamp.org/news/how-to-customize-service-workers-with-create-react-app-4424dda6210c/
serviceWorker.register();
