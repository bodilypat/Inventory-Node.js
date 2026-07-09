//src/features/auth/pages/ForgotPassword.jsx 

import { Link } from "react-router-dom";

import AuthCard from "../components/AuthCard";
import AuthLogo from "../components/AuthLogo";
import ForgotPasswordForm from "../components/ForgotPasswordForm";

import { useAuth } from "../hooks/useAuth";
import { ROUTE } from "@/constants/routes";

import "../styels/auth.css";

const ForgotPassword = () => {
    const { forgotPassword } = useAuth();

    const handleForgotPassword = async (email) => {
        await forgotPassword(email);
    };

    return (
        <div className="auth-page">
            <AuthCard>
                <AuthLogo 
                    subtitle="Reset your account password"
                />

                <ForgotPasswordForm 
                    onSubmit={handleForgotPassword}
                />

                <div className="auth-footer">
                    <span>Remember your password</span>

                    <Link to={ROUTES.LOGIN}>
                        Back to Login 
                    </Link>
                </div>
            </AuthCard>
        </div>
    );
};

export default ForgotPassword;


