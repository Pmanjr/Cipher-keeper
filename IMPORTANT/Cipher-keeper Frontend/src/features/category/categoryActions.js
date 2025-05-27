import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const createCategory = createAsyncThunk(
  'category/createCategory',
  async ({ name }, { getState, rejectWithValue }) => {
    try {
      const { auth } = getState();
      const config = {
        headers: {
          'x-auth-token': `${auth.token}`,
          'Content-Type': 'application/json',
        },
      };
      const { data } = await axios.post(`api/categories`, { name }, config);
      return data;
    } catch (error) {
      if (error.response && error.response.data?.message) {
        return rejectWithValue(error.response.data?.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getCategory = createAsyncThunk(
  'category/getCategory',
  async (arg, { getState, rejectWithValue }) => {
    try {
      const { auth } = getState();
      const config = {
        headers: {
          'x-auth-token': `${auth.token}`,
          'Content-Type': 'application/json',
        },
      };
      const { data } = await axios.get(`api/categories`, config);
      return data;
    } catch (error) {
      if (error.response && error.response.data?.message) {
        return rejectWithValue(error.response.data?.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const updateCategory = createAsyncThunk(
  'category/updateCategory',
  async ({ id, name }, { getState, rejectWithValue }) => {
    try {
      const { auth } = getState();
      const config = {
        headers: {
          'x-auth-token': `${auth.token}`,
          'Content-Type': 'application/json',
        },
      };
      const { data } = await axios.put(`api/categories/${id}`, { name }, config);
      return data;
    } catch (error) {
      if (error.response && error.response.data?.message) {
        return rejectWithValue(error.response.data?.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const deleteCategory = createAsyncThunk(
  'category/deleteCategory',
  async (id, { getState, rejectWithValue }) => {
    try {
      const { auth } = getState();
      const config = {
        headers: {
          'x-auth-token': `${auth.token}`,
          'Content-Type': 'application/json',
        },
      };
      const { data } = await axios.delete(`api/categories/delete/${id}`, config);
      return data;
    } catch (error) {
      if (error.response && error.response.data?.message) {
        return rejectWithValue(error.response.data?.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
