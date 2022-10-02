import styled from 'styled-components';
import breakpoint from '../../breakpoints';

const Card = styled.div`
  margin-top: 16px;
  padding: 16px;
  max-width: 900px;
  width: 60%;
  min-width: 300px;
  color: #b5c2bc;
  background-color: #1d1f20;
  border-radius: 16px;

  ${breakpoint('md')`
    margin-top: 32px;
    padding: 32px;
  `}
`;

export default Card;
