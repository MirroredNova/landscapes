import React from 'react';
import styled from 'styled-components';
import breakpoint from '../breakpoints';
import img from '../images/tempimg.jpg';
import Card from './Card';

const FormWrapper = styled.div`
  font-size: 16px;
  margin-top: 1em;
  display: block;
  width: 100%;
  display: flex;

  ${breakpoint('md')`
    font-size: 32px;
    margin-top: 1em;
  `}

  input {
    flex-grow: 1;
    width: 10px;
    color: #b5c2bc;
    background-color: #1d1f20;
    border: 3px #181a1b solid;
    margin-right: 16px;
    padding: 5px;

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
  }

  button {
    padding: 0 20px 0 20px;
    cursor: pointer;
    color: #b5c2bc;
    border: 3px #181a1b solid;
    background-color: #1d1f20;
    box-shadow: none;

    &:hover {
      background-color: #181a1b;
      border: 3px solid #1d1f20;
    }
  }
`;

function Body() {
  return (
    <Card>
      <div>
        <img src={img} alt="Logo" />
      </div>
      <FormWrapper>
        <input placeholder="Enter a Country" type="text" />
        <button type="submit">Guess</button>
      </FormWrapper>
    </Card>
  );
}

export default Body;
