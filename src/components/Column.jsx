import React from 'react';
import './Column.css';
import Cell from './Cell';

const Column = ({ col, id, stage, setStage, player, setPlayer, newGame, setNewGame }) => {

    const checkColumn = (directive, copyStage) => {
        const column = [...directive];
        // CHECK COLUMN UP
        for (let j = 1; copyStage[column[0].x][column[0].y + j] === player; j++) {
            const equalDisk = { x: id, y: column[0].y + j };
            column.push(equalDisk);
            if (column.length === 4) {
                column.forEach((cell) => {
                    copyStage[cell.x][cell.y] = `${player} connected`;
                });
                setNewGame(0);
            }
        }
    }

    const checkRow = (directive, copyStage) => {
        const row = [...directive];
        // CHECK RIGHT
        for (let j = 1; copyStage[row[0].x + j] && copyStage[row[0].x + j][row[0].y] === player; j++) {
            const equalDisk = { x: id + j, y: row[0].y };
            row.push(equalDisk);
            if (row.length === 4) {
                row.forEach((cell) => {
                    copyStage[cell.x][cell.y] = `${player} connected`;
                });
                setNewGame(0);
            }
        }
        // CHECK LEFT
        for (let j = 1; copyStage[row[0].x - j] && copyStage[row[0].x - j][row[0].y] === player; j++) {
            const equalDisk = { x: id - j, y: row[0].y };
            row.push(equalDisk);
            if (row.length === 4) {
                row.forEach((cell) => {
                    copyStage[cell.x][cell.y] = `${player} connected`;
                });
                setNewGame(0);
            }
        }
    }

    const checkDiagonal_1 = (directive, copyStage) => {
        const diagonal = [...directive];
        // CHECK UP LEFT
        for (let j = 1; (copyStage[diagonal[0].x + j] && copyStage[diagonal[0].y + j]) && copyStage[diagonal[0].x + j][diagonal[0].y + j] === player; j++) {
            const equalDisk = { x: id + j, y: diagonal[0].y + j };
            diagonal.push(equalDisk);
            if (diagonal.length === 4) {
                diagonal.forEach((cell) => {
                    copyStage[cell.x][cell.y] = `${player} connected`;
                });
                setNewGame(0);
            }
        }
        // CHECK DOWN RIGHT
        for (let j = 1; (copyStage[diagonal[0].x - j] && copyStage[diagonal[0].y - j]) && copyStage[diagonal[0].x - j][diagonal[0].y - j] === player; j++) {
            const equalDisk = { x: id - j, y: diagonal[0].y - j };
            diagonal.push(equalDisk);
            if (diagonal.length === 4) {
                diagonal.forEach((cell) => {
                    copyStage[cell.x][cell.y] = `${player} connected`;
                });
                setNewGame(0);
            }
        }
    }

    const checkDiagonal_2 = (directive, copyStage) => {
        const diagonal = [...directive];
        // CHECK UP RIGHT
        for (let j = 1; (copyStage[diagonal[0].x - j] && copyStage[diagonal[0].y + j]) && copyStage[diagonal[0].x - j][diagonal[0].y + j] === player; j++) {
            const equalDisk = { x: id - j, y: diagonal[0].y + j };
            diagonal.push(equalDisk);
            if (diagonal.length === 4) {
                diagonal.forEach((cell) => {
                    copyStage[cell.x][cell.y] = `${player} connected`;
                });
                setNewGame(0);
            }
        }
        // CHECK DOWN LEFT
        for (let j = 1; (copyStage[diagonal[0].x + j] && copyStage[diagonal[0].y - j]) && copyStage[diagonal[0].x + j][diagonal[0].y - j] === player; j++) {
            const equalDisk = { x: id + j, y: diagonal[0].y - j };
            diagonal.push(equalDisk);
            if (diagonal.length === 4) {
                diagonal.forEach((cell) => {
                    copyStage[cell.x][cell.y] = `${player} connected`;
                });
                setNewGame(0);
            }
        }
    }

    const dropDisk = (id, i = 1) => {
        if (newGame !== 2) {
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
            // CHECK ALL DIRECTIONS
            checkColumn(directive, copyStage);
            checkRow(directive, copyStage);
            checkDiagonal_1(directive, copyStage);
            checkDiagonal_2(directive, copyStage);
            // UPDATE GAME STATE
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