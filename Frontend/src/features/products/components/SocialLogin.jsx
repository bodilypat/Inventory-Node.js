//File: src/features/auth/components/SocialLogin.jsx 

import { Chrome, Github } from "lucide-react";
import Button from "../../../components/common/Button";

import "../styels/auth.css";

const SocailLogin = ({
    onGoogleLogin,
    onGithubLogin,
    loading = false,
}) => {
    return (
        <div className="auth-socail">

            {/* Divider */}
            <div className="auth-divider">
                <span></span>

                <p>OR</p>

                <span></span>
            </div>

            {/* Google */}

            <Button 
                type="button"
                className="auth-social-button"
                onClick={onGoogleLogin}
                disabled={loading}
            >
                <Chrome size={20} />

                <span>Continue with Google</span>

            </Button>

            {/* Github */}

            <Button 
                type="button"
                className="auth-social-button"
                onClick={onGithubLogin}
                disabled={loading}
            >
                <Github size={20} />

                <span>Continue with Github</span>
            </Button>
        </div>
    );
};

export default SocialLogin;
