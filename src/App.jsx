import React, { useState } from 'react';
import './App.css';
import Control from './components/Control';
import Modal from './components/Modal';
import Stage from './components/Stage';
import { createStage } from './stageData';

function App() {

  const [stage, setStage] = useState(createStage());
  const [player, setPlayer] = useState('green');
  const [newGame, setNewGame] = useState(false);

  const startNewGame = () => {
    setNewGame(true);
    setPlayer('green');
    setStage(createStage());
  }

  return (
    <div className='App'>
      <Stage stage={stage} setStage={setStage} player={player} setPlayer={setPlayer} newGame={newGame} setNewGame={setNewGame} />
      <Control player={player} newGame={newGame} onStart={startNewGame} />
      <Modal player={player}/>
    </div>
  );
}

export default App;