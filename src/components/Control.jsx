import React from 'react';
import './Control.css';

const Control = ({ player, newGame, onStart }) => {

    const playerName = player === 'green' ? 'Player 1' : 'Player 2';

    return (
        <section className='ctrWrapper'>
            <aside className='control'>
                <div className='head'>
                    <h1 className='title'>CONNECT 4</h1>
                </div>
                <div className='turn'>
                    <div className={`disk ${newGame? player: 'game-over'}`}>
                        {newGame && <h2 className='player'>{playerName}</h2>}
                    </div>
                </div>
                <div className='button'>
                    <button className='startButton' onClick={onStart}>New Game</button>
                </div>
            </aside>
        </section>
    )
}

export default Control;