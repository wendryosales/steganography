import { createSlice } from '@reduxjs/toolkit';
import { decodeImage } from '../actions';

interface DecodeState {
  payload: {
    id: string;
    message: string;
    image_original: string;
    image_hidden: string;
  }
  status: string;
  loading: boolean
  error: null | string
}

const initialState = {
  payload: {
    id: '',
    message: '',
    image_original: '',
    image_hidden: '',
  },
  status: 'idle',
  loading: false,
  error: null,
} as DecodeState;

export const decodeSlice = createSlice({
  name: 'decode',
  initialState,
  reducers: {},
  extraReducers: {
    [decodeImage.pending.type]: (state) => {
      state.loading = true;
    },
    [decodeImage.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.status = 'success';
      state.payload = action.payload;
    },
    [decodeImage.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    }
  },
})

const decodeReducer = decodeSlice.reducer
export default decodeReducer