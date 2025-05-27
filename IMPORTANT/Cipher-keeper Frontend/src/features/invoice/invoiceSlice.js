import { createSlice } from '@reduxjs/toolkit';
import { createInvoice, getOneInvoice, getInvoices } from './invoiceActions';

const token = localStorage.getItem('token') ? localStorage.getItem('token') : null

const initialState = {
    loading: false,
    invoice: [],
    token,
    error: null,
    success: false,
}

const invoiceSlice = createSlice({
    name: 'invoice',
    initialState,
    reducers: {},
    extraReducers: {
        [createInvoice.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [createInvoice.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.invoice = payload;
            state.success = true;
        },
        [createInvoice.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
        [getInvoices.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [getInvoices.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.invoice = payload;
            state.success = true;
        },
        [getInvoices.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
        [getOneInvoice.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [getOneInvoice.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.invoice = payload;
            state.success = true;
        },
        [getOneInvoice.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        }
    }
})

export default invoiceSlice.reducer