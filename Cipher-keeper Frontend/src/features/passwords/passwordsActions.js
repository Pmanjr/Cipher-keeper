import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const createPassword = createAsyncThunk(
    'passwords/createPassword',
    async({ fancyName, password, username, categoryId, description }, { getState, rejectWithValue }) => {
        try {
            const { auth } = getState();
            const config = {
                headers: {
                    'x-auth-token': `${auth.token}`,
                    "Content-Type": "application/json"
                }
            }
            const { data } = await axios.post(`api/passwords/`, { fancyName, password, username, categoryId, description }, config);
            // window.location.reload()
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

export const getPasswords = createAsyncThunk(
    'passwords/getPasswords',
    async(arg, { getState, rejectWithValue }) => {
        try {
            const { auth } = getState();
            const config = {
                headers: {
                    'x-auth-token': `${auth.token}`,
                    "Content-Type": "application/json"
                }
            }
            const { data } = await axios.get(`api/passwords/`, config);
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

export const updatePassword = createAsyncThunk(
    'passwords/updatePassword',
    async({ id, fancyName, password, username, categoryId, description }, { getState, rejectWithValue }) => {
        try {
            const { auth } = getState();
            const config = {
                headers: {
                    'x-auth-token': `${auth.token}`,
                    "Content-Type": "application/json"
                }
            }
            const { data } = await axios.put(`api/passwords/${id}`, { fancyName, password, username, categoryId, description }, config);
            // window.location.reload()
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

// export const deletePassword = createAsyncThunk(
//     'passwords/deletePassword',
//     async(arg, { getState, rejectWithValue }) => {
//         try {
//             const { auth } = getState();
//             const config = {
//                 headers: {
//                     'x-auth-token': `${auth.token}`,
//                     "Content-Type": "application/json"
//         }
//             }
//             const { data } = await axios.delete(`${process.env.REACT_APP_BASE_URL}api/passwords/delete`, config);
//             // window.location.reload()
//             return data;
//             } catch (error) {
//                 if (error.response && error.response.data?.message) {
//                     return rejectWithValue(error.response.data?.message);
//                     } else {
//                     return rejectWithValue(error.message);
//                     }
//                 }
//             }
//     )