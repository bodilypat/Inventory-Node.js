//File: src/features/auth/components/RememberMe.jsx 

import PropTypes from "prop-types";
import Checkbox from "@/components/forms/CheckBox";

const RememberMe = ({
    checked = false,
    onChange,
    name= "rememberMe",
    label= "Remember me",
    disabled= false,
    className= "",
}) => {
    return (
        <div className={`remember-me ${className}`}>
            <Checkbox 
                id={name}
                name={name}
                checked={checked}
                onChange={onChange}
                disabled={disabled}
                label={label}
            />
        </div>
    );
};

RememberMe.propTypes = {
    checked: PropTypes.bool, 
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string,
    label: PropTypes.string,
    disabled: PropTypes.bool,
    className: PropTypes.string,
};

export default RememberMe;

