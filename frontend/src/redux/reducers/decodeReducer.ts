import { createSlice } from '@reduxjs/toolkit';
import { decodeImage } from '../actions';

interface DecodeState {
  payload: {
    id: string;
    message: string;
  }
  status: string;
  loading: boolean
  error: null | string
}

const initialState = {
  payload: {
    id: '',
    message: '',
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
      state.status = 'sucess';
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