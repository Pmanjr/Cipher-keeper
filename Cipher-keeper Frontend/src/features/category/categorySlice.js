import { createSlice } from '@reduxjs/toolkit';
import { createCategory, updateCategory, getCategory, deleteCategory } from './categoryActions';

const token = localStorage.getItem('token') ? localStorage.getItem('token') : null;

const initialState = {
  loading: false,
  category: {},
  categories: [],
  token,
  error: null,
  success: false,
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: {
    [createCategory.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [createCategory.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.category = payload;
      state.success = true;
    },
    [createCategory.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [getCategory.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [getCategory.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.categories = payload;
      state.success = true;
    },
    [getCategory.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [updateCategory.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [updateCategory.fulfilled]: (state, { payload }) => {
      const updatedCategory = state.category.map((category) =>
        category._id === payload.id ? payload : category
      );
      state.loading = false;
      state.category = updatedCategory;
      state.success = true;
    },
    [updateCategory.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [deleteCategory.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [deleteCategory.fulfilled]: (state, { payload }) => {
      const updatedCategories = state.categories.filter(
        (category) => category._id !== payload._id
      );
      state.loading = false;
      state.categories = updatedCategories;
      state.success = true;
    },
    [deleteCategory.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default categorySlice.reducer;
