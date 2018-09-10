import React from 'react';
import './modal.css'
import { Link } from 'react-router-dom';

const DefaultModal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';
    console.log('children in modal:', children);
    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {children}
                <button className="pink-btn" onClick={handleClose}>CLOSE</button>
            </section>
        </div>
    )
}

export default DefaultModal;