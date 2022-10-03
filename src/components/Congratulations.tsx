import React from 'react';
import styled from 'styled-components';
import { COUNTRY, DATE_TODAY } from '../constants/GameDetails';
import Button from './layout/Button';

const ScoreWrapper = styled.div`
  font-size: 24px;
  text-align: center;

  & * {
    margin: 10px 0px;
  }
`;

const CopyButton = styled(Button)`
  width: 100%;
  margin: 10px 0px;
`;

type ScoreProps = {
  score: { id: number; val: string }[];
  guessNum: number;
};

const convertScore = (score: { id: number; val: string }[]) => {
  const copyList = score.map((item) => {
    if (item.val === COUNTRY) return '🟩';
    if (item.val === '') return '⬛';
    return '🟥';
  });
  return copyList.join('');
};

function Congratulations({ score, guessNum }: ScoreProps) {
  const scoreText = convertScore(score);
  const copyText = `Landscapes ${guessNum}/5\n${DATE_TODAY}\n${scoreText}`;

  return (
    <ScoreWrapper>
      <h2>Congratulations!</h2>
      <p>
        This landscape is from
        {' '}
        {COUNTRY}
      </p>
      Score
      {' '}
      {guessNum}
      /5:
      {' '}
      {scoreText}
      <CopyButton
        type="button"
        onClick={() => {
          navigator.clipboard.writeText(copyText);
        }}
      >
        Copy
      </CopyButton>
    </ScoreWrapper>
  );
}

export default Congratulations;
