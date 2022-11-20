import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../services/api';

interface ImageState {
  images: []
  loading: boolean
  error: null | string
}

const initialState = {
  images: [],
  loading: false,
  error: null,
} as ImageState;

export const getImages = createAsyncThunk(
  'images/getImages',
  async () => {
    const response = await api.get('/images');
    return response.data;
  }
);


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