import { theme } from 'components/theme';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderList = styled.ul`
  padding-block: ${theme.spacing(5)};

  block-size: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing(25)};

  border-bottom: 1px solid;
  box-shadow: 0 0 13px 3px;
`;

export const StyledLink = styled(NavLink)`
  padding: ${theme.spacing(4)};

  display: block;
  text-align: center;
  flex: 1 1 auto;
  inline-size: 120px;

  background-image: linear-gradient(
    to right,
    ${theme.colors.bottle} 0%,
    ${theme.colors.sunny} 51%,
    ${theme.colors.bottle} 100%
  );
  background-size: 200% auto;
  font-weight: 600;
  text-transform: uppercase;
  white-space: nowrap;
  box-shadow: 0 0 20px;
  border-radius: 6px;
  transition: background-position ${theme.transition},
    box-shadow ${theme.transition}, color ${theme.transition};

  &:hover {
    background-position: right center;
    box-shadow: 0 0 13px 3px;
    color: ${theme.colors.light};
  }

  &.active {
    color: ${theme.colors.light};
  }
`;
