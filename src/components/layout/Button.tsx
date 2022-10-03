import styled from 'styled-components';

const Button = styled.button`
  background-color: #1d1f20;
  color: #b5c2bc;
  border: 3px #181a1b solid;
  padding: 0 20px 0 20px;
  width: 150px;
  font-size: 24px;
  vertical-align: middle;
  box-shadow: none;
  cursor: pointer;

  &:hover {
    background-color: #181a1b;
    border: 3px solid #1d1f20;
  }
`;

export default Button;
