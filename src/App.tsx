import React, { useState } from 'react';
import styled from 'styled-components';
import Body from './components/Game';
import Description from './components/Description';
import Header from './components/Header';
import COUNTRY from './constants/Country';
import Score from './components/Score';

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
  const [showScore, setShowScore] = useState(false);
  const [guessNum, setGuessNum] = useState(0);
  const [enableGuess, setEnableGuess] = useState(false);

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
        setShowScore(true);
      }
    }

    if (guessNum >= 4) {
      setShowScore(true);
    }
  };

  return (
    <>
      <Header />
      <BodyWrapper>
        <Description />
        <Body guessHandler={guessHandler} guessed={enableGuess} />
        <Score showScore={showScore} score={score} />
      </BodyWrapper>
    </>
  );
}

export default App;
