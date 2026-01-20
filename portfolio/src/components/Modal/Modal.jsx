import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import { Link } from "react-router-dom";
const Modal = ({ closeModal }) => {
    return ReactDOM.createPortal(
        <div onClick={closeModal} className='modal-overlay'>
            <div
                onClick={(e) => e.stopPropagation()}
                className='modal-container'
            >
                <div className='upper-section'>
                    <h1>Contact for services!</h1>
                    <p onClick={closeModal} className='close'>
                        &times;
                    </p>
                </div>
                <div className='middle-section'>
                    <h3>
                        I Offer Quality Services and Solutions
                    </h3>
                    <p>
                        Contact me for below services..👇
                    </p>
                    <ul>
                        <li>
                            Frontend Website Development using React
                        </li>
                        <li>
                           Website Deployment & Hosting Setup
                        </li>
                        <li>
                            Basic Backend API Development (Django)
                        </li>
                    </ul>
                </div>
                <div className='lower-section'>
                    <button onClick={closeModal} className='modal-btn btn-close'>
                        Close
                    </button>
                    <Link className="modal-btn btn-contact" to="/contact">
                        Contact
                    </Link>
                </div>
            </div>
        </div>,
        document.getElementById('modal')
    );
};

export default Modal;