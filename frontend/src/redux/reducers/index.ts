import { combineReducers } from 'redux';
import imageReducer from './imagesReducer';
import uploadReducer from './uploadReducer';

const rootReducer = combineReducers({
  upload: uploadReducer,
  imageReducer,
});

export default rootReducer;