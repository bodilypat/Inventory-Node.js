//src/components/layout/Navar/Navbar.jsx 

import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h1>IMS</h1>
            </div>
            <ul className="navbar-links">
                <li><a href="/">Dashboard</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/suppliers">Suppliers</a></li>
                <li><a href="/sales">Sales</a></li>
                <li><a href="/purchases">Purchases</a></li>
                <li><a href="/reports">Reports</a></li>
                <li><a href="/settings">Settings</a></li>
            </ul>
        </nav>
    )
};
