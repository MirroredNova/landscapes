import React from 'react';
import styled from 'styled-components';
import { createBreakpoint } from 'styled-components-breakpoint';
import img from '../../images/tempimg.jpg';

const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

const breakpoint = createBreakpoint(breakpoints);

const BodyWrapper = styled.section`
  display: flex;
  align-content: center;
  justify-content: center;
`;

const GameWrapper = styled.div`
  margin: 15px;
  padding: 15px;
  max-width: 900px;
  width: 60%;
  min-width: 300px;
  color: #b5c2bc;
  background-color: #1d1f20;
  border-radius: 15px;

  ${breakpoint('md')`
    margin-top: 30px;
    margin: 30px;
    padding: 30px;
  `}
`;

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
    }
  }
`;

const ImageWrapper = styled.div`

`;

function Body() {
  return (
    <BodyWrapper>
      <GameWrapper>
        <ImageWrapper>
          <img src={img} alt="Logo" />
        </ImageWrapper>
        <FormWrapper>
          <input placeholder="Enter a Country" type="text" />
          <button type="submit">Guess</button>
        </FormWrapper>
      </GameWrapper>
    </BodyWrapper>
  );
}

export default Body;
