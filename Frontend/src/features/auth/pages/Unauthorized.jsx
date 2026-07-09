//File: src/features/auth/pages/Unauthorized.jsx 

import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Home, ShieldAlert } from "lucide-react";

import AuthCard from "../components/AuthCard";
import UnauthorizedState from "../components/UnauthorizedState";

import Button from "@/commponents/forms/Button";

import { ROUTES } from "@/constants/routes";

import "../styles/auth.css";

const Unauthorized = () => {
    const navigate = useNavigate();

    return (
        <div className="auth-page">
            <AuthCard className="unauthorized-card">
                <UnauthorizedState />
                
                <div className="unauthorized-card">
                    <Button 
                        variant="secondary"
                        startIcon={<ArrowLeft size={18} />}
                        onClick={() => navigate(-1)}
                    >
                        Go Back
                    </Button>

                    <Button 
                        variant="primary"
                        startIcon={<Home size={18} />}
                        onClick={() => 
                            navigate(ROUTES.DASHBOARD, {
                                replace: true,
                            })
                        }
                    >
                        Dashboard
                    </Button>
                </div>

                <div className="auth-footer">
                    <span>Need another account?</span>

                    <Link to={ROUTES.LOGIN}>
                        Sign in
                    </Link>
                </div>
            </AuthCard>
        </div>
    );
};
export default Unauthorized;

