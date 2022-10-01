import React, { useMemo } from 'react';
import styled from 'styled-components';
import Card from './Card';

const ListWrapper = styled.ul`
  list-style: none;
  text-align: center;
  padding: 0;
  margin: 0;

  & li {
    padding: 5px;
    border: 3px #181a1b solid;
  }

  & li:not(:last-child) {
    margin-bottom: 5px;
  }
`;

type ScoreProps = {
  score: { id: number; val: string; }[]
}

function Score({ score }: ScoreProps) {
  const guesses = useMemo(() => score.map((item) => <li key={item.id}>{item.val || '\u00A0'}</li>), [score]);

  return (
    <Card>
      <ListWrapper>{guesses}</ListWrapper>
    </Card>
  );
}

export default Score;
