import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';
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

export const encodeImage = createAsyncThunk(
  'encode/sendImageToEncode',
  async (data: { image: string, message: string}) => {
    const response = await api.post('/encode/', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  }
);

export const getImages = createAsyncThunk(
  'images/getImages',
  async () => {
    const response = await api.get('/image/');
    return response.data;
  }
);