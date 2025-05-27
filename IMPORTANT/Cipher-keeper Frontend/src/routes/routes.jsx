import { useState, Suspense, lazy } from 'react';
import {
    HashRouter as Router,
    // BrowserRouter as Router,
    Routes as RouterCover,
    Route
} from 'react-router-dom';

import Overview from '../components/Overview';
import Customers from '../components/Customers';
import ContactUs from '../components/ContactUs';
import Help from '../components/Help';
import Setting from '../components/Setting';
import Notifications from '../components/Notifications';
import Search from '../components/Search';
import InvoicePreview from '../components/InvoicePreview';
import ProtectedRoute from '../routing/ProtectedRoute';
import NewCategory from '../components/NewCategory';
import Categories from '../components/Categories';
import UpdateCategory from '../components/UpdateCategory';
import PasswordManager from '../components/PasswordManager';
import AddCategory from '../components/AddCategory';
import WelcomePage from '../pages/WelcomePage';

const Login = lazy(() => import('../pages/LoginPage'));
// import Login from '../pages/LoginPage';
const SignUpPage = lazy(() => import('../pages/SignUpPage'));
// import SignUpPage from '../pages/SignUpPage';
const Dashboard = lazy(() => import('../pages/Dashboard'));
// import Dashboard from '../pages/Dashboard';

const Routes = () => {
    const [formData, setFormData] = useState({
        name: '',
    })

    return (
        // <HashRouter>
        <Router basename='/'>
        <Suspense fallback={<div>Loading...</div>}>
            <RouterCover>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/welcome" element={<WelcomePage />} />
                <Route path="/invoicePreview" element={<InvoicePreview />} />
                <Route path="/updatecategory" element={<UpdateCategory />} />
                <Route path="/addcategory" element={<AddCategory />} />
                <Route path="/" element={<ProtectedRoute />}>
                    <Route path="/dashboard" element={<Dashboard />}>
                        <Route index element={<Overview />} />
                        <Route path="/dashboard/customers" element={<Customers />} />
                        <Route path="/dashboard/passwordmanager" element={<PasswordManager />} />
                        <Route path="/dashboard/contactus" element={<ContactUs />} />
                        <Route path="/dashboard/help" element={<Help />} />
                        <Route path="/dashboard/newcategory" element={<NewCategory formData={formData} setFormData={setFormData} />} />
                        <Route path="/dashboard/category" element={<Categories formData={formData} setFormData={setFormData} />} />
                        <Route path="/dashboard/setting" element={<Setting />} />
                        <Route path="/dashboard/notifications" element={<Notifications />} />
                        <Route path="/dashboard/search" element={<Search />} />
                    </Route>
                </Route>
            </RouterCover>
            </Suspense>
        </Router>
        // </HashRouter>
    )
}

export default Routes;