import { combineReducers } from 'redux';
import memeCouple from './memeCouple.js';
import sessionInfo from './sessionInfo.js';


const reducer = combineReducers({
  memeCouple,
  sessionInfo,
});

export default reducer;
