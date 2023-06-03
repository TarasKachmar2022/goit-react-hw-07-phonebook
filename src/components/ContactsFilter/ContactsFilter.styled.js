import styled from 'styled-components';

export const FilterInput = styled.input`
  background-color: rgba(255, 255, 255, 80%);
  line-height: 1.5;
  padding-left: 10px;
  border-radius: 7px;
  border: 0;
  outline: 0;
  box-shadow: 0.5px 0.5px 1px #000;
  margin-bottom: 10px;

  @media screen and (min-width: 320px) {
    width: 290px;
    font-size: 18px;
  }
  @media screen and (min-width: 768px) {
    width: 330px;
    font-size: 22px;
  }
  @media screen and (min-width: 1280px) {
    width: 350px;
    font-size: 24px;
  }
`;
