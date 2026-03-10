//src/components/layout/Sidebar/Sidebar.jsx 
import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <h2>Inventory Management</h2>
            </div>
            <nav className="sidebar-menu">
                {sidebarMenu .map((item, index) => (
                    <a key={index} href={item.link} className="sidebar-menu-item">
                        {item.name}
                    </a>
                ))}
            </nav>
        </aside>
    );
};

const sidebarMenu = [
    { name: "Dashboard", link: "/dashboard" },
    { name: "Products", link: "/products" },
    { name: "Suppliers", link: "/suppliers" },
    { name: "Customers", link: "/customers" },
    { name: "Sales", link: "/sales" },
    { name: "Purchases", link: "/purchases" },
    { name: "Reports", link: "/reports" },
    { name: "Settings", link: "/settings" },
];
