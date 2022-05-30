import React from 'react';
import './Control.css';

const Control = ({ player, newGame, onStart }) => {

    let text;

    if (newGame === 2) {
        text = 'RESET';
    } else if (newGame === 0 || newGame === 1) {
        text = 'NEW';
    };

    let player_1;

    if (newGame === 1) {
        player_1 = 'player';
    } else if (newGame === 0) {
        player_1 = 'player green';
    } else if (newGame === 2 && player === 'green') {
        player_1 = 'player green';
    } else {
        player_1 = 'player';
    }

    let player_2;

    if (newGame === 1) {
        player_2 = 'player';
    } else if (newGame === 0) {
        player_2 = 'player red';
    } else if (newGame === 2 && player === 'red') {
        player_2 = 'player red';
    } else {
        player_2 = 'player';
    }

    return (
        <div className='control'>
            <div className={player_1} />
            <div>
                <button className='button' type='button' onClick={onStart}>{text}</button>
            </div>
            <div className={player_2} />
        </div>
    )
}

export default Control;