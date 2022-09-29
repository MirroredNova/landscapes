import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  padding: 15px;
  font-size: 42px;
  text-align: center;
  color: #b5c2bc;
  background-color: #0a0a0a;
`;

function Header() {
  return (
    <HeaderWrapper>
      Landscaped
    </HeaderWrapper>
  );
}

export default Header;
