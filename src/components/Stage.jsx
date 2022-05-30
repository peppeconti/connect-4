import React from 'react';
import './Stage.css';
import Column from './Column';
import Control from './Control';

const Stage = ({ stage, setStage, player, setPlayer, newGame, setNewGame, startNewGame }) => {

    return (
        <div className='stage-wrapper'>
            <section className='main'>
                {stage.map((col, index) => <Column key={index} id={index} col={col} stage={stage} setStage={setStage} player={player} setPlayer={setPlayer} newGame={newGame} setNewGame={setNewGame} />)}
            </section>
            <aside className='start-panel'>
                <Control onStart={startNewGame} player={player} newGame={newGame} />
            </aside>
        </div>
    )
}

export default Stage;