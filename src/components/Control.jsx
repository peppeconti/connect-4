import React from 'react';
import './Control.css';

const Control = ({ player, onStart }) => {

    const playerName = player === 'green' ? 'Player 1' : 'Player 2';

    return (
        <section className='ctrWrapper'>
            <aside className='control'>
                <div className='head'>
                    <h1 className='title'>Connect 4</h1>
                </div>
                <div className='turn'>
                    <h2 className='player'>{playerName}</h2>
                    <div className={`disk ${player}`} />
                </div>
                <div className='button'>
                    <button className='startButton' onClick={onStart}>New Game</button>
                </div>
            </aside>
        </section>
    )
}

export default Control;