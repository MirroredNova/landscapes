import styled from 'styled-components';
import breakpoint from '../../breakpoints';

const Input = styled.input`
  width: 100%;
  color: #b5c2bc;
  background-color: #181a1b;
  border: 3px #181a1b solid;
  margin-bottom: 5px;
  padding: 5px;
  vertical-align: middle;

  ${breakpoint('md')`
      margin-right: 32px;
    `}

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #b5c2bc;
    text-align: center;  
    opacity: 1;
  }
`;

export default Input;
