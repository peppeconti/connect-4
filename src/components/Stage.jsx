import React from 'react';
import './Stage.css';
import Column from './Column';

const Stage = ({ stage, setStage, player, setPlayer, newGame, setNewGame }) => {

    return (
        <div className='stage-wrapper'>
            <section className='main'>
                {stage.map((col, index) => <Column key={index} id={index} col={col} stage={stage} setStage={setStage} player={player} setPlayer={setPlayer} newGame={newGame} setNewGame={setNewGame} />)}
            </section>
        </div>
    )
}

export default Stage;