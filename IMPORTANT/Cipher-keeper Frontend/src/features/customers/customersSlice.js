import { createSlice } from '@reduxjs/toolkit';
import { createCustomer, updateCustomer, getOneCustomer, getCustomers } from './customersActions';

const token = localStorage.getItem('token') ? localStorage.getItem('token') : null

const initialState = {
    loading: false,
    customers: [],
    token,
    error: null,
    success: false,
}

const customersSlice = createSlice({
    name: 'customers',
    initialState,
    reducers: {},
    extraReducers: {
        [createCustomer.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [createCustomer.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.customers = payload;
            state.success = true;
        },
        [createCustomer.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
        [getCustomers.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [getCustomers.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.customers = payload;
            state.success = true;
        },
        [getCustomers.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
        [getOneCustomer.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [getOneCustomer.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.customers = payload;
            state.success = true;
        },
        [getOneCustomer.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
        [updateCustomer.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [updateCustomer.fulfilled]: (state, { payload }) => {
            const updatedCustomer = state.customers.map((customer) => customer._id === payload.id ? payload : customer);
            state.loading = false;
            state.customers = updatedCustomer;
            state.success = true;
        },
        [updateCustomer.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
    }
})

export default customersSlice.reducer