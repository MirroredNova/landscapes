import React, { useState } from 'react';
import styled from 'styled-components';
import breakpoint from '../breakpoints';
import { IMG_PATH } from '../constants/GameDetails';
import Autofill from './Autofill';
import Button from './layout/Button';
import Card from './layout/Card';
import Input from './layout/Input';

const FormWrapper = styled.div`
  font-size: 16px;
  margin-top: 1em;
  display: block;
  width: 100%;
  display: flex;

  ${breakpoint('md')`
    font-size: 24px;
    margin-top: 1em;
  `}

  & form {
    width: 100%;
  }
`;

const GuessButton = styled(Button)`
  width: 100%;
`;

type GameProps = {
  guessHandler: (guess: string) => void;
  guessed: boolean;
};

function Game({ guessHandler, guessed }: GameProps) {
  const [guess, setGuess] = useState('');

  const submitGuessHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    guessHandler(guess);
    setGuess('');
  };

  return (
    <Card>
      <div>
        <img src={IMG_PATH} alt="Logo" />
      </div>
      <FormWrapper>
        <form onSubmit={submitGuessHandler}>
          <Input
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
            placeholder="Enter a Country"
            disabled={guessed}
            type="text"
            name="guess"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
          />
          <GuessButton type="submit" disabled={guessed}>Guess</GuessButton>
        </form>
      </FormWrapper>
      <Autofill />
    </Card>
  );
}

export default Game;
