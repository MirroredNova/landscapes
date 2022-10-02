import React, { useMemo } from 'react';
import styled from 'styled-components';
import COUNTRY from '../constants/Country';
import Button from './layout/Button';
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
`;

const ScoreWrapper = styled.div`
  margin-bottom: 24px;
  font-size: 24px;
`;

type ScoreProps = {
  showScore: boolean
  score: { id: number; val: string; }[]
}

const convertScore = (score: { id: number; val: string; }[]) => {
  const copyList = score.map((item) => {
    if (item.val === COUNTRY) return '🟩';
    if (item.val === '') return '⬛';
    return '🟥';
  });
  return copyList.join('');
};

function Score({ showScore, score }: ScoreProps) {
  const guesses = useMemo(() => score.map((item) => <li key={item.id}>{item.val || '\u00A0'}</li>), [score]);
  const copyText = convertScore(score);

  return (
    <Card>
      {showScore && (
        <ScoreWrapper>
          Score:
          {' '}
          {copyText}
          <Button type="button" onClick={() => { navigator.clipboard.writeText(copyText); }}>Copy</Button>
        </ScoreWrapper>
      )}
      <ListWrapper>{guesses}</ListWrapper>
    </Card>
  );
}

export default Score;
