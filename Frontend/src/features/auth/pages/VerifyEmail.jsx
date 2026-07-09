//File: src/features/auth/pages/VerifyEmail.jsx

import { useEffect } from "react";
import { Link, useNaviigate, useParams } from "react-router-dom";

import AuthCard from "../components/AuthCard";
import AuthLogo from "../components/AuthLogo";
import VerifyEmailStatus from "../components/VerifyEmailStatus";

import { useAuth } from "../hooks/useAuth";
import { ROUTES } from "@/constants/routes";

import "../styles/auth.css";

const VerifyEmail = () => {
    const { token } = useParams();
    const navigate = useNavigate();

    const { VerifyEmail} = useAuth();

    const handleeVerification = async () => {
        await VerifyEmail(token);
    };

    useEffect(() => {
        if (!token) {
            navigate(ROUTES.LOGIN, {
                replace: true,
            });
        }
    }, [token, navigate]);

    return (
        <div className="auth-page">
            <AuthCard>
                <AuthLogo 
                    subtitle="Verifying your email address"
                />

                <VerifyEmailStatus  
                    token={token}
                    onVerify={handleVerification}
                    onSuccess={() => 
                        navigate(ROUTES.LOGIN, {
                            replace: true,
                        })
                    }
                />

                <div className="auth-footer">
                    <span>Already verified</span>

                    <Link to={ROUTES.LOGIN}>
                        Sign In 
                    </Link>
                </div>
            </AuthCard>
        </div>
    );
};

export default VerifyEmail;

