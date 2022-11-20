import { UPLOAD_FAIL, UPLOAD_SUCESS } from './constants';

export const uploadSucess = () => {
  return {
    type: UPLOAD_SUCESS,
    payload: 'sucess',
  };
}

export const uploadFail = () => {
  return {
    type: UPLOAD_FAIL,
    payload: 'fail',
  };
}

export const uploadClose = () => {
  return {
    type: UPLOAD_FAIL,
    payload: 'close',
  };
}
