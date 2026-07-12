//File: src/features/auth/components/PasswordStrength.jsx
import PropTypes from "pro-types";
import "./auth.css"

const strengthLevels = [
    { label: "Very Weak", color: "#ef4444"},
    { label: "Weak", color: "#f97316"},
    { label: "Fair", color: "#facc15"},
    { label: "Good", color: "#22c554"},
    { label: "Strong", color: "#16a34a"},
];

const calculateStrength = (password = "") => {
    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/\d/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    return Math.min(score, 5);
};

const PasswordStrength = ({ password }) => {
    if (!password) return null;

    const score = calculateStrength(password);
    const Level = strengthLevel[Math.max(score - 1, 0)];

    return (
        <div className="password-strength">
            <div className="password-strength-bars">
                {strengthLevels.map((_, index) => (
                    <span 
                        key={index}
                        className="password-strength-bar"
                        style={{
                            backgroundColor: 
                                index < score ? Level.color : "#e5e7eb",
                        }}
                    />
                ))}
            </div>

            <small 
                className="password-strength-label"
                style={{ color: Level.color}}
            >
                Password Strength: <strong>{Level.label}</strong>
            </small>
        </div>
    );
};

PasswordStrength.popTypes = {
    password: PropTypes.string.isRequired,
};

export default PasswordStrength;

