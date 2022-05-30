import React, { useState, useEffect } from 'react';
import './App.css';
import Modal from './components/Modal';
import Stage from './components/Stage';
import { createStage } from './stageData';

function App() {

  const [stage, setStage] = useState(createStage());
  const [player, setPlayer] = useState('green');
  const [newGame, setNewGame] = useState(1);
  const [modal, setModal] = useState(false);

  const startNewGame = () => {
    setNewGame(2);
    setPlayer('green');
    setStage(createStage());
  }

  useEffect(() => {
    if (newGame === 0) setModal(true);
  }, [newGame]);

  useEffect(() => {
    if (modal) {
      setTimeout(() => {
        setModal(false);
      }, 15000)
    }
  }, [modal]);

  return (
    <div className='App'>
      <Stage stage={stage} setStage={setStage} player={player} setPlayer={setPlayer} newGame={newGame} setNewGame={setNewGame} startNewGame={startNewGame} />
      {modal && <Modal player={player} />}
    </div>
  );
}

export default App;