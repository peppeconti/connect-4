import React, { useState } from 'react';
import './App.css';
import Control from './components/Control';
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
    </div>
  );
}

export default App;