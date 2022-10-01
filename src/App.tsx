import React, { useState } from 'react';
import styled from 'styled-components';
import Body from './components/Body';
import Description from './components/Description';
import Header from './components/Header';
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
  const [guessNum, setGuessNum] = useState(0);

  const guessHandler = (guess: string) => {
    if (guess && guessNum < 5) {
      setScore((prevState) => {
        const newGuessArray = [...prevState];
        newGuessArray[guessNum].val = guess;
        return newGuessArray;
      });
      setGuessNum((prevState) => (prevState + 1));
    }
  };

  return (
    <>
      <Header />
      <BodyWrapper>
        <Description />
        <Body guessHandler={guessHandler} />
        <Score score={score} />
      </BodyWrapper>
    </>
  );
}

export default App;
