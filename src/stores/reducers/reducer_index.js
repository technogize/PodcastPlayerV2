import { combineReducers } from 'redux';
import { nowPlaying } from './reducer_now-playing';

const rootReducer = combineReducers({
  nowPlaying
});

export default rootReducer;
