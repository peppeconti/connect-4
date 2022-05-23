import React from 'react';
import './Column.css';
import Cell from './Cell';

const Column = ({ col, id, stage, setStage, player, setPlayer, newGame, setNewGame }) => {

    const checkVertical = (directive, copyStage) => {
        const column = [...directive];
        // console.log(column);
        for (let j = 1; copyStage[column[0].x][column[0].y + j] === player; j++) {
            const equalDisk = { x: id, y: column[0].y + j };
            column.push(equalDisk);
            //console.log(column);
            if (column.length === 4) {
                //console.log(column);
                column.forEach((cell) => {
                    copyStage[cell.x][cell.y] = `${player} connected`;
                });
                setNewGame(false);
            }
        }
    }

    const dropDisk = (id, i = 1) => {
        if (!newGame) {
            return;
        }
        const copyStage = [...stage];
        if (i > [copyStage[id].length]) {
            return;
        }
        if (copyStage[id][copyStage[id].length - i] === 'empty') {
            const directive = [];
            copyStage[id][copyStage[id].length - i] = player;
            directive.push({ x: id, y: copyStage[id].length - i });
            // console.log(directive);
            checkVertical(directive, copyStage);
            setPlayer(prev => prev === 'green' ? prev = 'red' : prev = 'green');
            setStage(copyStage);
        } else {
            dropDisk(id, ++i);
        }
    }

    return (
        <div className='column' onClick={() => dropDisk(id)}>{col.map((e, index) => <Cell key={index} color={e} />)}</div>
    )
}

export default Column;