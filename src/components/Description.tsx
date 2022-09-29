import React, { useState } from 'react';
import styled from 'styled-components';
import breakpoint from '../breakpoints';

const DescriptionWrapper = styled.div`
  margin: 16px;
  padding: 16px;
  max-width: 900px;
  width: 60%;
  min-width: 300px;
  color: #b5c2bc;
  background-color: #1d1f20;
  border-radius: 16px;

  ${breakpoint('md')`
    margin-top: 32px
  `}

  &:hover {
    background-color: #181a1b;
    outline: 3px solid #1d1f20;
  }
`;

function Description() {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <DescriptionWrapper onClick={toggle}>
      <h3>
        {open ? <i className="fa-solid fa-caret-down" /> : <i className="fa-solid fa-caret-right" />}
        {' '}
        How to Play
      </h3>
      {open && (
        <p>
          Enter into the input below what country you think the image comes from.
          If you get it right, good job! If you get it wrong, you have 5 total guesses.
        </p>
      )}

    </DescriptionWrapper>
  );
}

export default Description;
