import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const userLogin = createAsyncThunk(
    'auth/userLogin',
    async({ email, password }, { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            const { data } = await axios.post(`api/auth`, { email, password }, config);
            localStorage.setItem('userEmail', data.user.email)
            localStorage.setItem('user', data.user.firstName + ' ' + data.user.lastName);
            localStorage.setItem('token', data.token);
            localStorage.setItem("select", JSON.stringify({overview: true,
                product: false,
                customers: false,
                invoice: false,
                setting: false,
                help: false,
                contactUs: false,
                NewProduct: false,
                newCategory: false,
                Products: false,
                category: false,
                NewCustomer: false,
                Customers: false,
                newInvoice: false,
                paidInvoice: false,
                pendingInvoice: false,
                invoices: false,
                logout: false,}));
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
