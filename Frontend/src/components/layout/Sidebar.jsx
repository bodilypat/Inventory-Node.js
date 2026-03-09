//src/components/layout/Sidebar.jsx

import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
            <div className="sidebar">
                <h2>Inventory Management System</h2>
                <nav>
                    <ul>
                        <li><Link to="/">Dashboard</Link></li>
                        <li><Link to="/categories">Categories</Link></li>
                        <li><Link to="/suppliers">Suppliers</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/sales">Sales</Link></li>
                        <li><Link to="/purchases">Purchases</Link></li>
                        <li><Link to="/inventory">Inventory</Link></li>
                        <li><Link to="/logs">Logs</Link></li>
                        <li><Link to="/settings">Settings</Link></li>
                    </ul>
                </nav>
            </div>
    );
};

