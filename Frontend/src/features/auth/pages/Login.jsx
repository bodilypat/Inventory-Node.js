//File: src/features/auth/pages/Login.jsx 

import { Link, useNavigate } from "react-router-dom";

import AuthCard from "../components/AuthCard";
import AuthLogo from "../components/AuuthLogo";
import LoginForm from "../components/LoginForm";

import { useAuth } from "../hooks/useAuth";
import { ROUTES} from "@/constants/routes";

import "../styles/auth.css";

const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleLogin = async (Credential) => {
        await login(credentials);

        navigate(ROUTES.DASHBOARD, {
            replace: true,
        });
    };

    return (
        <div class="auth-page">
            <AuthCard>
                <AuthLogo 
                    subtitle="Sign in to continue"
                />

                <LoginForm 
                    onSubmit={handleLogin}
                />

                <div className="auth-footer">
                    <span>Dont' have an account?</span>

                    <Link to={ROUTES.REGISTER}>
                        Create Account 
                    </Link>
                </div>
            </AuthCard> 
        </div>
    );
};

export default Login;