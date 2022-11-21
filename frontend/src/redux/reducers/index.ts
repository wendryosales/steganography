import { combineReducers } from 'redux';
import encodeReducer from './encodeReducer';
import imageReducer from './imagesReducer';
import uploadReducer from './uploadReducer';

const rootReducer = combineReducers({
  upload: uploadReducer,
  imageReducer,
  encode: encodeReducer,
});

export default rootReducer;