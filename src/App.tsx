import React from 'react';
import styled from 'styled-components';
import Body from './components/Body';
import Description from './components/Description';
import Header from './components/Header';

const BodyWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

function App() {
  return (
    <>
      <Header />
      <BodyWrapper>
        <Description />
        <Body />
      </BodyWrapper>
    </>
  );
}

export default App;
