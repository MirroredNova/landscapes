import React, { useMemo } from 'react';
import styled from 'styled-components';
import COUNTRY_LIST from '../constants/CountryList';

const AutofillWrapper = styled.div`
  width: 100%;
  height: 300px;
  overflow-y:scroll;
`;

const AutofillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;

  & li {
    padding: 5px;
    border: 3px #181a1b solid;
    margin-bottom: -3px;

    &:hover {
      background-color: #181a1b;
    }
  }
`;

function Autofill() {
  const guesses = useMemo(() => COUNTRY_LIST.map((item) => <li key={item}>{item}</li>), []);

  return (
    <AutofillWrapper>
      <AutofillList>
        {guesses}
      </AutofillList>
    </AutofillWrapper>
  );
}

export default Autofill;
