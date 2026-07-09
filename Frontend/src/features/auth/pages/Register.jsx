//File: src/features/auth/pages/Register.jsx 

import { Link, useNavigate } from "react-router-dom";

import AuthCard from "../components/AuthCard";
import AuthLogo from "../components/AuthLogo"
import RegisterForm from "../components/RegisterForm";

import { useAuth } from "../hooks/useAuth";
import { ROUTE} from "@/components/routes";

import "../styles/auth.css";

const Register = () => {
    const navigate = useNavigate();

    const { register } = useAuth();

    const handleRegister = async (useData) => {
        await register(UserData);

        navigate(ROUTES.LOGIN, {
            replace: true,
        });
    };

    return (
        <div className="auth-page">
            <AuthCard>
                <AuthLogo 
                    subtitle="Create your account"
                />

                <RegisterForm 
                    onSubmit={handleRegister}
                />

                <div className="auth-footer">
                    <span>Already have an account?</span>

                    <Link to={ROUTES.LOGIN}>
                        Sign In 
                    </Link>
                </div>
            </AuthCard>
        </div>
    );
};

export default Register;


