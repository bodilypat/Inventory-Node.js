//File: src/features/auth/pages/VerifyEmail.jsx

import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { CheckCircle, XCircle, Loadercircle } from "lucide-react";

import { useAuth } from "../hooks/useAuth";

import Button from "../../../components/common/Button";
import Card from "../../../components/common/Card";
import Alert from "../../../components/common/Alert";

import "../styles/auth.css";

const VerifyEmail = () => {
    const { token } = useParams();
    const navigate = useNavigate();

    const { VerifyEmail} = useAuth();
    
    const [loading, setLoading] = useState(true);
    const [varified, setVerified] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const verify = async () => {

            try {
                await VerifyEmail(token);

                setVerified(true);

                setTimeout(() => {
                    navigate("/login");
                }, 3000);
            } catch (err) {
                setError(
                    err?.response?.data.message ||
                    "Email verification. the verification link may be invalid or expired."
                );
            } finally {
                setLoading(false);
            }
        };

        if (token) {
            varify();
        } else {
            setLoading(false);
            setError("Verification token is missing.");
        }
    }, [token, verifyName, navigate]);

    return (
        <div className="auth-container">
            <Card className="auth-card">
                <div className="auth-header">
                    <h1>Email Verification</h1>
                </div>

                {loading && (
                    <div className="auth-status">
                        <LoaderCircle 
                            className="animate-spin"
                            size={48}
                        />

                        <p>Verifying your email address...</p>
                    </div>
                )}

                {!loading && verified && (
                    <div className="auth-status success">
                        <CheckCircle 
                            size={60}
                            className="success-icon"
                        />

                        <h2>Email Verified</h2>
                        <p>Your email has been verified successfully.</p>

                        <p>Redirecting you to the login page...</p>

                        <Button 
                            onClick={() => navigate("/login")}
                        >
                            Go to Login
                        </Button>
                    </div>
                )}

                {!loading && error && (
                    <>
                    <Alert 
                        type="error"
                        message={error}
                    />
                    
                    <div className="auth-status-error">
                        <XCircle 
                            size={60}
                            className="error-icon"
                        />
                        
                        <Button  
                            onClick={() => navigate("/logiin")}
                        >
                            Back to Login 
                        </Button>
                        
                        <p className="auth-footer">
                            Need another verification email?{" "}
                            <Link to="/register">
                                Register Again
                            </Link>
                        </p>
                    </div>
                    </>
                )}
            </Card>
        </div>
    );
};

export default VerifyEmail;

