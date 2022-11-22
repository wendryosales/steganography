import { combineReducers } from 'redux';
import decodeReducer from './decodeReducer';
import encodeReducer from './encodeReducer';
import imageReducer from './imagesReducer';
import uploadReducer from './uploadReducer';

const rootReducer = combineReducers({
  upload: uploadReducer,
  imageReducer,
  encode: encodeReducer,
  decode: decodeReducer,
});

export default rootReducer;