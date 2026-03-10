//src/components/layout/Dashboard/DashboardLayout.jsx 

import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

const DashboardLayout = ({ children }) => {
    return (
        <div className="dashboard-layout">
            <Sidebar />
            <div className="main-content">
                <Navbar />
                <div className="content-area">
                    {children}
                </div>
            </div>
        </div>
    );
};

