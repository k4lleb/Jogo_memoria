import React from 'react';
import Grid from './Grid';
import './MemoryGame.css';

const MemoryGame = () => {
  return (
    <main className="memory-game">
      <h1>Jogo da Memória</h1>
      <Grid />
    </main>
  );
};

export default MemoryGame;