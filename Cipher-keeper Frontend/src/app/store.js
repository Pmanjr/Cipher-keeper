import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import passwordsReducer from '../features/passwords/passwordsSlice';
import categoryReducer from '../features/category/categorySlice';
import customersReducer from '../features/customers/customersSlice';
import invoiceReducer from '../features/invoice/invoiceSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        passwords: passwordsReducer,
        category: categoryReducer,
        customers: customersReducer,
        invoice: invoiceReducer,
    }
});

export default store;