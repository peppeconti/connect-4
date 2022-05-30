import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const Backdrop = () => {
    return (
        <div className='back' />
    );
};

const Winner = ({ player }) => {
    return (
        <div className='winner'>
            <span className={player === 'green' ? 'red-text' : 'green-text'}>{player === 'green' ? 'Player 2' : 'Player 1'}</span> wins!
        </div>
    );
};

const portalElement = document.getElementById('overlays');

const Modal = ({ player }) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop />, portalElement)}
            {ReactDOM.createPortal(<Winner player={player} />, portalElement)}
        </Fragment>
    );
};

export default Modal;