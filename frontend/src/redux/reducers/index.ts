import { combineReducers } from 'redux';
import uploadReducer from './uploadReducer';

const rootReducer = combineReducers({
  uploadReducer,
});

export default rootReducer;