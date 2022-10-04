import React, { useMemo } from 'react';
import styled from 'styled-components';
import { COUNTRY } from '../constants/GameDetails';
import Card from './layout/Card';

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

  .correct {
    background-color: rgba(0, 255, 0, 0.5);
  }

  .incorrect {
    background-color: rgba(255, 0, 0, 0.5);
  }
`;

type ScoreProps = {
  score: { id: number; val: string; }[]
}

function Score({ score }: ScoreProps) {
  const itemColor = (guess: string): string => {
    if (guess === COUNTRY) return 'correct';
    if (guess !== COUNTRY && guess) return 'incorrect';
    return '';
  };

  const guesses = useMemo(() => score.map((item) => <li key={item.id} className={itemColor(item.val)}>{item.val || '\u00A0'}</li>), [score]);

  return (
    <Card>
      <ListWrapper>{guesses}</ListWrapper>
    </Card>
  );
}

export default Score;
