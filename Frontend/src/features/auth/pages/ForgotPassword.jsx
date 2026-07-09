//src/features/auth/pages/ForgotPassword.jsx 

import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

import { useAuth } from "../hooks/useAuth";

import Input from "../../../components/common/Input";
import Button from "../../../components/common/Button";
import Alert from "../../../components/common/Alert";

import "../styels/auth.css";

const ForgotPassword = () => {
    const { forgotPassword } = useState("");

    const [email, setEmail] = useState("");
    const [laoding, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const validateEmail = () => {
        if (!email.trim(email)) {
            return "Please enter a valid address.";
        }

        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setMessage("");
        setError("");

        const validationError = validateEmail();

        if (validationError) {
            setError(validationError);
            return;
        }

        try {
            setLoading(true);

            await formatPassword(email);

            setMessage(
                "If an account for this email address, a password reset link has been sent."
            );

            setEmail("");
        } catch (err) {
            setError(
                err?.response?.data?.message ||
                "Unable to process your request."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="forgot-password-container">
            <div className="forgot-password-card">
                <div className="forgot-password-header">
                    <h1>Forgot Password</h1>
                    <p>
                        Enter your email address and we'll send you a password reset link. 
                    </p>
                </div>

                {message && (
                    <Alert 
                        type="success"
                        message={message}
                    />
                )}

                <form 
                    className="forgot-password-form"
                    onSubmit={handleSubmit}
                >
                    <Input 
                        label="Email Address"
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Enter your email"
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="email"
                        icon={<Mail size={18} />}
                        required
                    />

                    <Button 
                        type="submit"
                        disabled={loading}
                    >
                        {loading 
                            ? "Sending..."
                            : "Send Reset Link"}
                    </Button>
                </form>

                <div className="forgot-password-footer">
                    <p>
                        Remember your password?{""}
                        <Link to="/login">
                            Back to Login 
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;


