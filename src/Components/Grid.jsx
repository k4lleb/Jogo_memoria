import React, { useState, useEffect } from 'react';
import './MemoryGame.css';

const characters = [
  'M_abraço',
  'M_espelho',
  'M_força',
  'M_montanha',
  'M_sorriso',
];

const Grid = () => {
  const [cards, setCards] = useState([]);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);

  useEffect(() => {
    const duplicatedCharacters = [...characters, ...characters];
    const shuffledArray = duplicatedCharacters.sort(() => Math.random() - 0.5);
    const initializedCards = shuffledArray.map((character, index) => ({
      id: index,
      character,
      revealed: false,
      disabled: false,
    }));
    setCards(initializedCards);
  }, []);

  const handleCardClick = (id) => {
    if (firstCard && secondCard) return;

    const updatedCards = [...cards];
    const clickedCard = updatedCards.find((card) => card.id === id);

    if (!clickedCard || clickedCard.revealed || clickedCard.disabled) return;

    clickedCard.revealed = true;

    if (!firstCard) {
      setFirstCard(clickedCard);
    } else {
      setSecondCard(clickedCard);

      if (clickedCard.character === firstCard.character) {
        updatedCards.forEach((card) => {
          if (card.character === clickedCard.character) card.disabled = true;
        });
        resetTurn();
      } else {
        setTimeout(() => {
          updatedCards.forEach((card) => {
            if (!card.disabled) card.revealed = false;
          });
          resetTurn();
        }, 1000);
      }
    }

    setCards(updatedCards);
  };

  const resetTurn = () => {
    setFirstCard(null);
    setSecondCard(null);
  };

  return (
    <div className="grid">
      {cards.map((card) => (
        <div
          key={card.id}
          className={`card ${card.revealed ? 'reveal-card' : ''}`}
          onClick={() => handleCardClick(card.id)}
        >
          <div
            className="face front"
            style={{
              backgroundImage: card.revealed || card.disabled
                ? `url('./images/${card.character}.png')`
                : 'none',
            }}
          ></div>
          <div className="face back"></div>
        </div>
      ))}
    </div>
  );
};

export default Grid;
