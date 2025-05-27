import { createSlice } from '@reduxjs/toolkit';
import { userLogin } from './authActions';

const token = localStorage.getItem('token') ? localStorage.getItem('token') : null

const initialState = {
    loading: false,
    user: null,
    token,
    error: null,
    success: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            localStorage.removeItem('formData');
            localStorage.removeItem('category');
            localStorage.removeItem('formData');
            localStorage.removeItem('select');
            localStorage.removeItem('userEmail');
            state.loading = false
            state.user = null
            state.token = null
            state.error = null
        }
    },
    extraReducers: {
        [userLogin.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [userLogin.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.user = payload;
            state.token = payload.token;
            state.success = true;
        },
        [userLogin.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
    }
})

export const { logout } = authSlice.actions
export default authSlice.reducer