import { createStore } from 'redux';
import appState from './reducers/reducer_index';

export default createStore(
  appState,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
