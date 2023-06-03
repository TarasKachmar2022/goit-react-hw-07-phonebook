import styled from 'styled-components';

export const MainBlock = styled.div`
  backdrop-filter: blur(7.5px);
  box-shadow: rgb(0, 0, 0) 0px 0px 80px;

  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 440px;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    padding: 20px;
    width: 650px;
  }
`;

export const MainTitle = styled.h1`
  text-shadow: ${p => p.theme.shadows.textShadow};

  @media screen and (min-width: 320px) {
    font-size: 36px;
    margin-top: 10px;
  }
  @media screen and (min-width: 768px) {
    font-size: 42px;
    margin-top: 28px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 48px;
  }
`;

export const Title = styled.h2`
  text-shadow: ${p => p.theme.shadows.textShadow};

  @media screen and (min-width: 320px) {
    font-size: 32px;
  }
  @media screen and (min-width: 768px) {
    font-size: 34px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 38px;
  }
`;
