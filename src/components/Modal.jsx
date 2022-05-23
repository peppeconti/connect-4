import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const ModalOverlay = ({ player }) => {
    return (
        <div className='modal'>
            {player === 'red' ? 'Player 1' : 'Player 2'} wins!
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