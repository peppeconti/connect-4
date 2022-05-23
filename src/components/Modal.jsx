import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

const ModalOverlay = ({ player }) => {
    return (
        <div className='modal'>
            {player} wins!
        </div>
    );
};

const portalElement = document.getElementById('overlays');

const Modal = ({ player }) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<ModalOverlay player={player} />, portalElement)}
        </Fragment>
    );
};

export default Modal;