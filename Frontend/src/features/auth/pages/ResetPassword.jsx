//File: src/features/aut/pages/ResetPassword.jsx 

import { Link } from "react-router-dom";

import AuthCard from "../components/AuthCard";
import AuthLogo from "../components/AuthLogo";
import ForgotPasswordForm from "../components/ForgotPasswordForm";

import { useAuth } from "../hooks/useAuth";
import { ROUTES } from "@/constants/routes";

import "../styles/auth.css";

const ResetPassword = () => {
    const navigate = useNavigate();
    const { token } = useParams();

    const { resetPassword } = useAuth();

    const handleResetPassword = async (password) => {
        await resetPassword(token, password);

        navigate(ROUTES.LOGIN, {
            replace: true,
        });
    };

    return (
        <div className="auth-page">
            <AuthCard>
                <AuthLogo 
                    subtitle="Create a new password"
                />

                <ResetPasswordForm 
                    onSubmit={handleResetPassword}
                />

                <div className="auth-footer">
                    <span>Remember your password?</span>

                    <Link to={ROUTES.LOGIN}>
                        Back to Login 
                    </Link>
                </div>
            </AuthCard>
        </div>
    );
};

export default ResetPassword;

