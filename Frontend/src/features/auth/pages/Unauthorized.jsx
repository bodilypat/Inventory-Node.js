//File: src/features/auth/pages/Unauthorized.jsx 

import { Link, useNavigate } from "react-router-dom";
import { shieldAlert, ArrowLeft, Home } from "lucide-react";

import Button from "../../../components/common/Button";
import Card from "../../../components/common/Card"

import "../styles/auth.css";

const Unauthorized = () => {
    const navigate = useNavigate();

    return (
        <div className="auth-container">
            <Card className="auth-card unauthorized-card">
                <div className="auth-header">
                    <shieldAlert    
                        size={72}
                        className="unauthorized-icon"
                    />

                    <h1>401 - Access Denied</h1>

                    <p>You don't have permission to access this page.</p>
                </div>

                <div className="unauthorized-content">
                    <p>
                        If you believe this is a mistake, please contact your administer or return to a page 
                        you have permission to access.
                    </p>
                </div>

                <div className="unauthorized-actions">
                    <Button     
                        type="button"
                        onClick={() => navigate(-1)}
                    >
                        <ArrowLeft  size={18} />
                        Back
                    </Button>

                    <Button 
                        type="button"
                        variant="primary"
                        onClick={() => navigate("/dashboard")}
                    >
                        <Home size={18} />
                        Dashboard
                    </Button>
                </div>

                <div className="auth-footer">
                    <Link to="/login">
                        Sign in with a different account
                    </Link>
                </div>
            </Card>
        </div>
    );
};

export default Unauthorized;

