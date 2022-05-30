import React from 'react';
import './Control.css';

const Control = ({ player, newGame, onStart }) => {

    return (
        <div className='control'>
            <div className={`player ${player === 'green' ? 'green' : 'empty'}`} />
            <div>
                <button className='button' type='button' onClick={onStart}>START</button>
            </div>
            <div className={`player ${player === 'red' ? 'red' : 'empty'}`} />
        </div>
    )
}

export default Control;