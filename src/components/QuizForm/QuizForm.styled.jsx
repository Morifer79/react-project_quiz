import { theme } from 'components/theme';
import { Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

export const WrapperFormik = styled.div`
  margin-block-start: ${theme.spacing(25)};
  block-size: 100%;
`;

export const StyledForm = styled(Form)`
  text-align: center;
  & > label {
    gap: ${theme.spacing(5)};
  }
`;

export const StyledFieldInput = styled(Field)`
  margin: 10px auto 20px;
  padding: ${theme.spacing(4)};
  inline-size: 288px;

  display: block;
  border-radius: 8px;
  caret-color: ${theme.colors.advanced};
  color: ${theme.colors.light};
  background: linear-gradient(
    80deg,
    ${theme.colors.bottle},
    ${theme.colors.sunny}
  );
  border: none;
  outline: 0px;
  box-shadow: 0 0 20px ${theme.colors.dark};

  &::placeholder {
    color: ${theme.colors.sunny};
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const StyledFieldSelect = styled(Field)`
  margin: 10px auto 40px;
  padding: ${theme.spacing(2)};
  inline-size: 288px;

  display: block;
  background: linear-gradient(
      80deg,
      ${theme.colors.bottle},
      ${theme.colors.sunny}
    )
    center no-repeat;
  box-shadow: 0 0 20px ${theme.colors.dark};
  border-radius: 8px;
  border: none;
  cursor: pointer;
  color: ${theme.colors.sunny};
  outline: 0px;

  & > option {
    background-color: ${theme.colors.bottle};
    color: ${theme.colors.sunny};
  }
`;

export const ErrMsg = styled(ErrorMessage)`
  font-size: 12px;
  color: ${theme.colors.advanced};
`;

export const BtnSubmit = styled.button`
  margin-inline: auto;
  padding: ${theme.spacing(2)};
  inline-size: 150px;

  display: block;
  text-align: center;
  font-weight: 600;
  border-radius: 8px;
  background-image: linear-gradient(
    to right,
    ${theme.colors.bottle} 0%,
    ${theme.colors.sunny} 51%,
    ${theme.colors.bottle} 100%
  );
  flex: 1 1 auto;
  background-size: 200% auto;
  color: ${theme.colors.sunny};
  box-shadow: 0 0 20px ${theme.colors.dark};
  border: none;
  transition: background-position ${theme.transition}, color ${theme.transition},
    box-shadow ${theme.transition};

  &:hover {
    background-position: right center;
    color: ${theme.colors.advanced};
    box-shadow: 0 0 13px 3px ${theme.colors.light};
  }
`;
