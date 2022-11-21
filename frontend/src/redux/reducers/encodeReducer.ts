import { createSlice } from '@reduxjs/toolkit';
import { encodeImage } from '../actions';

interface EncodeState {
  image: {
    id: string;
    message: string;
  }
  status: string;
  loading: boolean
  error: null | string
}

const initialState = {
  image: {
    id: '',
    message: '',
  },
  status: 'idle',
  loading: false,
  error: null,
} as EncodeState;

export const encodeSlice = createSlice({
  name: 'encode',
  initialState,
  reducers: {},
  extraReducers: {
    [encodeImage.pending.type]: (state) => {
      state.loading = true;
    },
    [encodeImage.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.status = 'sucess';
    },
    [encodeImage.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    }
  },
})

const encodeReducer = encodeSlice.reducer
export default encodeReducer