import React, { useState } from 'react';
import styled from 'styled-components';
import Game from './components/Game';
import Description from './components/Description';
import Header from './components/Header';
import Score from './components/Score';
import { COUNTRY } from './constants/GameDetails';
import Modal from './components/layout/Modal';
import Congratulations from './components/Congratulations';

const BodyWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const INITIAL_STATE = [
  { id: 1, val: '' },
  { id: 2, val: '' },
  { id: 3, val: '' },
  { id: 4, val: '' },
  { id: 5, val: '' },
];

function App() {
  const [score, setScore] = useState(INITIAL_STATE);
  const [guessNum, setGuessNum] = useState(0);
  const [enableGuess, setEnableGuess] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const guessHandler = (guess: string) => {
    const formattedGuess = guess.trim().toUpperCase();

    if (formattedGuess && guessNum < 5) {
      setScore((prevState) => {
        const newGuessArray = [...prevState];
        newGuessArray[guessNum].val = formattedGuess;
        return newGuessArray;
      });
      setGuessNum((prevState) => (prevState + 1));

      if (formattedGuess === COUNTRY) {
        setEnableGuess(true);
        setShowModal(true);
      }
    }

    if (guessNum >= 4) {
      setShowModal(true);
    }
  };

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <>
      <Modal
        isShown={showModal}
        toggleModal={toggleModal}
      >
        <Congratulations score={score} guessNum={guessNum} />
      </Modal>
      <Header />
      <BodyWrapper>
        <Description />
        <Game guessHandler={guessHandler} guessed={enableGuess} />
        <Score score={score} />
      </BodyWrapper>
    </>
  );
}

export default App;
