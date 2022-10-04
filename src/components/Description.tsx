import React, { useState } from 'react';
import styled from 'styled-components';
import Card from './layout/Card';

const DescriptionWrapper = styled(Card)`
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
          Enter into the input below what country or territory you think the image comes from.
          If you get it right, good job! If you get it wrong, you have 5 total guesses.
          You do need to spell the country correctly, however, capitalization does not matter.
        </p>
      )}
    </DescriptionWrapper>
  );
}

export default Description;
