import React, { Fragment, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const Backdrop = () => {
    return (
        <div className='back' />
    );
};

const Winner = ({ player, closingTime }) => {

    return (
        <div className='winner'>
            <p><span className={player === 'green' ? 'red-text' : 'green-text'}>{player === 'green' ? 'Player 2' : 'Player 1'}</span> wins!</p>
            <p className='timing'>ready in {closingTime} seconds...</p>
        </div>
    );
};

const portalElement = document.getElementById('overlays');

const Modal = ({ player, setModal }) => {

    const [closingTime, setClosingTime] = useState(10);

    useEffect(() => {
        const interval = setInterval(() => {
            setClosingTime(prev => prev - 1)
        }, 1000);

        return () => clearInterval(interval);
    }, [setClosingTime]);

    useEffect(() => {
        setTimeout(() => {
            setModal(false);
        }, 11)
    }, [setModal]);

    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop />, portalElement)}
            {ReactDOM.createPortal(<Winner player={player} closingTime={closingTime} />, portalElement)}
        </Fragment>
    );
};

export default Modal;