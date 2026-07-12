//src/features/auth/components/PasswordRequirements.jsx 
import PropTypes from "prop-types";
import "./auth.css";

const requirements = [
    {
        id: "length",
        label: "At least 8 characters",
        test: (password) => password.length >= 8,
    },
    {
        id: "uppercase",
        label: "At least one uppercase letter (A-Z)",
        test: (password) => /[A-Z]/.test(password),
    },
    {
        id: "lowercase",
        label: "At least one lowercase letter (a-z)",
        test: (password) => /[a-z]/.test(password),
    },
    {
        id: "number",
        label: "At least one number (0-9)",
        test: (password) => /\d/.test(password),
    },
    {
        id: "special",
        label: "At least one special character (!@#$...)",
        test: (password) => /[^A-Za-z0-9]/.test(password),
    },
];

const PasswordRequirements = ({ password = "" }) => {
    return (
        <div className="password-requirements">
            <p className="password-requirements-title">Password Requirements</p>

            <ul clasName="password-requirements-list">
                {requirements.map((item) => {
                    const passed = item.test(password);

                    return (
                        <li 
                            key={item.id}
                            className={`password-requirements-item ${
                                passed ? "passed" : "failed"
                            }`}
                        >
                            <span className="password-requirements-icon">
                                {passed ? "/" : "X"}
                            </span>

                            <span>{item.label}</span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

PasswordRequirements.propTypes = {
    password: PropTypes.string,
};

export default PasswordRequirements;

