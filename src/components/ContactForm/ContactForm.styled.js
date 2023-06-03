import styled from 'styled-components';
import {
  Form as FormikForm,
  ErrorMessage as FormikErrorMessage,
  Field,
} from 'formik';

export const Form = styled(FormikForm)`
  @media screen and (min-width: 320px) {
    text-align: center;
    width: 290px;
  }
  @media screen and (min-width: 768px) {
    width: 330px;
  }
  @media screen and (min-width: 1280px) {
    padding: 24px 48px;
    width: 550px;
  }
`;

export const FormLabelSpan = styled.span`
  display: flex;
  font-weight: 600;
  text-align: start;
  text-shadow: ${p => p.theme.shadows.textShadow};

  @media screen and (min-width: 320px) {
    font-size: 18px;
    margin-bottom: 5px;
  }
  @media screen and (min-width: 768px) {
    font-size: 21px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 24px;
    margin-bottom: 10px;
  }
`;

export const FormLabelIcon = styled.div`
  margin: 0 10px;

  & svg {
    font-size: 18px;
    filter: drop-shadow(0 0 5px #fff);
  }
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`;

export const InputField = styled(Field)`
  background-color: rgba(255, 255, 255, 80%);
  line-height: 1.5;
  padding-left: 10px;
  border-radius: 7px;
  border: 0;
  outline: 0;
  box-shadow: 0.5px 0.5px 1px #000;
  margin-bottom: 3px;

  @media screen and (min-width: 320px) {
    font-size: 18px;
  }
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 24px;
  }
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  color: ${p => p.theme.colors.error};
`;

export const FormBtn = styled.button`
  font-weight: 700;
  border: 1px solid ${p => p.theme.colors.grey};
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.darkGrey};
  transition: background-color 250ms linear;

  :hover {
    background-color: ${p => p.theme.colors.orange};
  }

  :active {
    scale: 0.95;
    background-color: ${p => p.theme.colors.orange};
  }

  @media screen and (min-width: 320px) {
    font-size: 16px;
    border-radius: 7px;
    padding: 7px 15px;
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
    border-radius: 10px;
    padding: 9px 18px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 18px;
    border-radius: 10px;
    padding: 10px 20px;
  }
`;

export const FormBtnText = styled.span`
  margin-left: 10px;
`;
