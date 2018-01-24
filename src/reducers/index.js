import { combineReducers } from 'redux';
import memeCouple from './memeCouple.js';
import sessionInfo from './sessionInfo.js';
import memesStats from './memesStats.js';

const reducer = combineReducers({
  memeCouple,
  sessionInfo,
  memesStats,
});

export default reducer;
