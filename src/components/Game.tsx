import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import breakpoint from '../breakpoints';
import COUNTRY_LIST from '../constants/CountryList';
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
  const [countries, setCountries] = useState(COUNTRY_LIST);
  const [showAutofill, setShowAutofill] = useState(false);
  const inputEl = useRef<HTMLInputElement>(null);

  const enableAutofill = () => {
    setShowAutofill(true);
  };

  const disableAutofill = () => {
    // setShowAutofill(false);
  };

  useEffect(() => {
    if (inputEl.current != null) {
      inputEl.current.focus();
    }
  });

  const submitGuessHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputEl.current != null && COUNTRY_LIST.includes(inputEl.current.value.toUpperCase())) {
      guessHandler(inputEl.current.value);
      inputEl.current.value = '';
    }
  };

  const changeFilter = () => {
    enableAutofill();
    if (inputEl.current != null) {
      const filteredCountries = COUNTRY_LIST.filter((item) => {
        if (inputEl.current != null) return item.includes(inputEl.current.value.toUpperCase());
        return '';
      });
      setCountries(filteredCountries);
    }
  };

  const clickHandler = (liValue: string) => {
    if (inputEl.current != null) {
      inputEl.current.value = liValue;
      setShowAutofill(false);
    }
  };

  return (
    <Card>
      <div>
        <img src={IMG_PATH} alt="Logo" />
      </div>
      <FormWrapper>
        <form onSubmit={submitGuessHandler} autoComplete="off">
          <Input
            placeholder="Enter a Country"
            disabled={guessed}
            type="text"
            name="guess"
            ref={inputEl}
            onChange={changeFilter}
            onBlur={disableAutofill}
          />
          <GuessButton type="submit" disabled={guessed}>Guess</GuessButton>
        </form>
      </FormWrapper>
      {showAutofill && <Autofill countries={countries} clickHandler={clickHandler} />}
    </Card>
  );
}

export default Game;
