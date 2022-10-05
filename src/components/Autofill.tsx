/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useMemo } from 'react';
import styled from 'styled-components';

const AutofillWrapper = styled.div`
  width: 100%;
  max-height: 300px;
  overflow-y:scroll;
`;

const AutofillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;

  & li {
    padding: 5px;

    &:hover {
      background-color: #181a1b;
    }
  }
`;

type AutofillProps = {
  countries: string[]
  clickHandler: (liValue: string) => void
}

function Autofill({ countries, clickHandler }: AutofillProps) {
  const listItemClicked = (e: React.MouseEvent<HTMLLIElement>) => {
    const li: HTMLLIElement = e.currentTarget;
    clickHandler(li.innerHTML);
  };

  const guesses = useMemo(() => countries.map((item) => (
    <li key={item} onClick={listItemClicked}>{item}</li>)), [countries]);

  return (
    <AutofillWrapper>
      <AutofillList>
        {guesses}
      </AutofillList>
    </AutofillWrapper>
  );
}

export default Autofill;
