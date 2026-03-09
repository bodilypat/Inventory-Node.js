//src/components/ui/Loader.jsx    

import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Loader = ({ size }) => {
  return (
    <div className={`loader ${size}`}>
        <div className="spinner"></div>
    </div>
  );
};

Loader.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Loader.defaultProps = {
  size: 'medium',
};

export default Loader;


