import { theme } from 'components/theme';
import styled from 'styled-components';

export const StyledInput = styled.input`
  padding: ${theme.spacing(4)};
  inline-size: 288px;

  caret-color: ${theme.colors.advanced};
  color: ${theme.colors.light};
  background: linear-gradient(
    80deg,
    ${theme.colors.bottle},
    ${theme.colors.sunny}
  );
  border-radius: 0 16px 0 16px;
  border: none;
  outline: 0px;
  box-shadow: 0 0 20px ${theme.colors.dark};

  &:placeholder-shown {
    font-style: italic;
  }

  &::placeholder {
    color: ${theme.colors.sunny};
  }
`;
