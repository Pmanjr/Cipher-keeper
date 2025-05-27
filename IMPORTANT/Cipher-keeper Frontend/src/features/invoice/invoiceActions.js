import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const createInvoice = createAsyncThunk(
    'invoice/createInvoice',
    async({invoiceCode, customerId, products, dueDate, totalAmount, taxes}, { getState, rejectWithValue }) => {
        try {
            const { auth } = getState();
            const config = {
                headers: {
                    'x-auth-token': `${auth.token}`,
                    "Content-Type": "application/json"
                }
            }
            const { data } = await axios.post(`api/invoices`, {invoiceCode, customerId, products, dueDate, totalAmount, taxes}, config);
            return data;
        } catch (error) {
            if (error.response && error.response.data?.message) {
                return rejectWithValue(error.response.data?.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
)

export const getInvoices = createAsyncThunk(
    'invoice/getInvoices',
    async(arg, { getState, rejectWithValue }) => {
        try {
            const { auth } = getState();
            const config = {
                headers: {
                    'x-auth-token': `${auth.token}`,
                    "Content-Type": "application/json"
                }
            }
            const { data } = await axios.get(`api/invoices`, config);
            // console.log(data)
            return data;
        }
        catch (error) {
            if (error.response && error.response.data?.message) {
                return rejectWithValue(error.response.data?.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
)

export const getOneInvoice = createAsyncThunk(
    'invoice/getOneInvoice',
    async(id, { getState, rejectWithValue }) => {
        try {
            const { auth } = getState();
            const config = {
                headers: {
                    'x-auth-token': `${auth.token}`,
                    "Content-Type": "application/json"
                }
            }
            const { data } = await axios.get(`api/invoices/${id}`, config);
            return data;
        }
        catch (error) {
            if (error.response && error.response.data?.message) {
                return rejectWithValue(error.response.data?.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
)