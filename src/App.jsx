import React, { useState } from 'react';
import './App.css';
import Modal from './components/Modal';
import Stage from './components/Stage';
import { createStage } from './stageData';

function App() {

  const [stage, setStage] = useState(createStage());
  const [player, setPlayer] = useState('green');
  const [newGame, setNewGame] = useState(1);

  const startNewGame = () => {
    setNewGame(2);
    setPlayer('green');
    setStage(createStage());
  }

  return (
    <div className='App'>
      <Stage stage={stage} setStage={setStage} player={player} setPlayer={setPlayer} newGame={newGame} setNewGame={setNewGame} startNewGame={startNewGame} />
      {newGame === 0 && <Modal player={player}/>}
    </div>
  );
}

export default App;