import { theme } from 'components/theme';
import styled from 'styled-components';

export const StyledSelect = styled.select`
  inline-size: 288px;
  padding: ${theme.spacing(4)};

  cursor: pointer;
  color: ${theme.colors.sunny};
  background: linear-gradient(
    80deg,
    ${theme.colors.bottle},
    ${theme.colors.sunny}
  );
  box-shadow: 0 0 20px ${theme.colors.dark};
  border-radius: 0 16px 0 16px;
  border: none;
  outline: 0px;

  & > option {
    background-color: ${theme.colors.bottle};
    color: ${theme.colors.sunny};
  }
`;
