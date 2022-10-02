import styled from 'styled-components';

const Button = styled.button`
  float: right;
  height: 100%;
  padding: 0 20px 0 20px;
  cursor: pointer;
  color: #b5c2bc;
  border: 3px #181a1b solid;
  background-color: #1d1f20;
  box-shadow: none;
  vertical-align: middle;
  width: 150px;

  &:hover {
    background-color: #181a1b;
    border: 3px solid #1d1f20;
  }
`;

export default Button;
