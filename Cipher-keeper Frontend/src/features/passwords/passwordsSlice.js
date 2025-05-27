import { createSlice } from '@reduxjs/toolkit';
import { createPassword, updatePassword, getPasswords } from './passwordsActions';

const token = localStorage.getItem('token') ? localStorage.getItem('token') : null

const initialState = {
    loading: false,
    password: {},
    passwords: [],
    token,
    error: null,
    success: false,
}

const passwordsSlice = createSlice({
    name: 'passwords',
    initialState,
    reducers: {},
    extraReducers: {
        [createPassword.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [createPassword.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.password = payload;
            state.success = true;
        },
        [createPassword.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
        [updatePassword.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [updatePassword.fulfilled]: (state, { payload }) => {
            const updatedPassword = state.passwords.map((password) => password._id === payload.id ? payload : password);
            state.loading = false;
            state.password = updatedPassword;
            state.success = true;
        },
        [updatePassword.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
        [getPasswords.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [getPasswords.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.passwords = payload;
            state.success = true;
        },
        [getPasswords.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
        // [deletePassword.pending]: (state, action) => {
        //     state.loading = true;
        //     state.error = null;
        // },
        // [deletePassword.fulfilled]: (state, { payload }) => {
        //     state.loading = false;
        //     state.success = true;
        //     state.error = null;
        //     state.passwords = payload;
        // },
        // [deletePassword.rejected]: (state, { payload }) => {
        //     state.loading = false;
        //     state.error = payload;
        // }
    }
})

export default passwordsSlice.reducer