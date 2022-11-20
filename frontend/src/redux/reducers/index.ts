import { combineReducers } from 'redux';
import nomeReducer1 from './nomeReducer1';

const rootReducer = combineReducers({
  nomeReducer1,
});

export default rootReducer;