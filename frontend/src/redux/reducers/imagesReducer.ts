import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../services/api';
import { getImages } from '../actions';

export type Image = {
  id: string;
  url: string;
  image: string;
  name: string;
}

interface ImageState {
  images: { results: Image[] }
  loading: boolean
  error: null | string
}

const initialState = {
  images: { results: [] },
  loading: false,
  error: null,
} as ImageState;

export const imageSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {},
  extraReducers: {
    [getImages.pending.type]: (state) => {
      state.loading = true;
    },
    [getImages.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.images = action.payload;
    },
    [getImages.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    }
  },
})

const imageReducer = imageSlice.reducer


export default imageReducer