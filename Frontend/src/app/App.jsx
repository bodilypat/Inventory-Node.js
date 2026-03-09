//src/pages/App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// layout 
import MainLayout from '../components/layout/MainLayout';

// Auth Pages 
import Login from './pages/Login';
import Register from './pages/Register';

// Main Pages
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Inventory from './pages/Inventory';
import Categories from './pages/Categories';
import PurchaseOrders from './pages/PurchaseOrders';
import SalesOrders from './pages/SalesOrders';
import Customers from './pages/Customers';
import Suppliers from './pages/Suppliers';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';

/* Protected Route Component */
const ProtectedRoute = ({ children, allowedRoles }) => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');

    if (!token) {
        return <Redirect to="/login" />;
    }

    if (allowedRoles && !allowedRoles.includes(role)) {
        return <Redirect to="/dashboard" />;
    }

    return children;
};

function App() {
    return (
        <Router>
            <Routes>
                /* Public Route */
                <Route path="/login" element={<Login />} />

                /* Protected Routes */
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="products" element={<Products />} />
                    <Route path="inventory" element={<Inventory />} />
                    <Route path="categories" element={<Categories />} />
                    <Route path="purchase-orders" element={<PurchaseOrders />} />
                    <Route path="sales-orders" element={<SalesOrders />} />
                    <Route path="customers" element={<Customers />} />
                    <Route path="suppliers" element={<Suppliers />} />
                    <Route path="reports" element={<Reports />} />
                    <Route path="settings" element={<Settings />} />
                </Route>
                    /* Catch-all Route */
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default App;


