import React, { useState } from 'react';
import styled from 'styled-components';
import breakpoint from '../breakpoints';
import img from '../images/canada.jpg';
import Card from './Card';

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

  & span {
    display: block;
    overflow: hidden;
    padding-right: 10px;
  }
`;

const Input = styled.input`
  width: 100%;
  color: #b5c2bc;
  background-color: #1d1f20;
  border: 3px #181a1b solid;
  margin-right: 16px;
  padding: 5px;
  vertical-align: middle;

  ${breakpoint('md')`
      margin-right: 32px;
    `}

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #b5c2bc;
    opacity: 1;
  }
`;

const Button = styled.button`
  float: right;
  height: 100%;
  padding: 0 20px 0 20px;
  cursor: pointer;
  color: #b5c2bc;
  border: 3px #181a1b solid;
  background-color: #1d1f20;
  box-shadow: none;
  vertical-align: middle;

  &:hover {
    background-color: #181a1b;
    border: 3px solid #1d1f20;
  }
`;

type BodyProps = {
  guessHandler: (guess: string) => void;
};

function Body({ guessHandler }: BodyProps) {
  const [guess, setGuess] = useState('');

  const submitGuessHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setGuess('');
    guessHandler(guess);
  };

  return (
    <Card>
      <div>
        <img src={img} alt="Logo" />
      </div>
      <FormWrapper>
        <form onSubmit={submitGuessHandler}>
          <Button type="submit">Guess</Button>
          <span>
            <Input
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus
              placeholder="Enter a Country"
              type="text"
              name="guess"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
            />
          </span>
        </form>
      </FormWrapper>
    </Card>
  );
}

export default Body;
