import { combineReducers } from 'redux';
import fileReducer from './fileReducer';

const rootReducer = combineReducers({
  fileManager: fileReducer,
});

export default rootReducer;