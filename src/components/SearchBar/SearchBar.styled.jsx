import { theme } from 'components/theme';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing(5)};
  margin-block-end: ${theme.spacing(7.5)};
`;

export const BtnRst = styled.button`
  padding: ${theme.spacing(4)};
  display: block;
  text-align: center;
  flex: 1 1 auto;

  inline-size: 288px;
  border-radius: 0 16px 0 16px;
  background-image: linear-gradient(
    to right,
    ${theme.colors.bottle} 0%,
    ${theme.colors.sunny} 51%,
    ${theme.colors.bottle} 100%
  );
  background-size: 200% auto;
  color: ${theme.colors.sunny};
  font-weight: 600;
  box-shadow: 0 0 20px ${theme.colors.dark};
  border: none;
  transition: background-position ${theme.transition}, color ${theme.transition};

  &:hover {
    background-position: right center;
    color: ${theme.colors.advanced};
  }
`;
