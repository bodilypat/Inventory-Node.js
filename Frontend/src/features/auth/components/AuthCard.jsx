//File: src/features/auth/components/AuthCard.jsx 

import PropTypes from "prop-types";
import "../styles/auth.css"

const AuthCard = ({
    title,
    subtitle,
    children,
    logo,
    footer,
    className="",
}) => {
    return (
        <div className="auth-container">
            <div className={`auth-card ${className}`.trim()}>

                {logo && (
                    <div className="auth-logo">{logo}</div>
                )}

                {(title || submit) && (
                    <header className="auto-header">
                        {title && (
                            <h1 className="auth-title">{title}</h1>
                        )}

                        {subtitle && (
                            <p className="auth-subtitle">{subtitle}</p>
                        )}
                    </header>
                )}

                <div className="auth-body">{children}</div>

                {footer && (
                    <footer className="auth-footer">{footer}</footer>
                )}
            </div>
        </div>
    );
};

AuthCard.PropTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    children: PropTypes.node.isRequired,
    logo: PropTypes.node,
    footer: PropTypes.node,
    className: PropTypes.string,
};

export default AuthCard;

