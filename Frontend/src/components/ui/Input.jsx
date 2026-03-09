//src/components/ui/Input.jsx 

import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Input = ({ type, placeholder, value, onChange }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="input-field"
        />
    );
};

Input.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Input;
