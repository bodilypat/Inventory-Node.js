//src/components/ui/Modal/ModalHeader.jsx 

import React from 'react';

const ModalHeader = ({ title, onClose }) => {
    return (
        <div className="modal-header">
            <h3>{title}</h3>
            <button onClick={onClose} className="close-button">X</button>
        </div>
    )
};

export default ModalHeader;

