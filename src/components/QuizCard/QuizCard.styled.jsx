import { theme } from 'components/theme';
import styled from 'styled-components';

const getTextColor = p => {
  switch (p.level) {
    case 'beginner':
      return `${p.theme.colors.beginner}`;
    case 'intermediate':
      return `${p.theme.colors.intermediate}`;
    case 'advanced':
      return `${p.theme.colors.advanced}`;
    default:
      return null;
  }
};

export const Wrapper = styled.div`
  block-size: 200px;
  inline-size: 300px;
  margin-inline: auto;

  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 0px 30px;
  outline: 0px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const Topic = styled.h2`
  margin-block-end: ${theme.spacing(5)};
`;

export const MetaWrapper = styled.div`
  block-size: 130px;
  inline-size: 280px;
  padding: 5px 10px;
  margin-inline: ${theme.spacing(5)};

  position: relative;
  top: 10px;

  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 0px 30px 0px 0px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const TextLevel = styled.p`
  margin-block-end: ${theme.spacing(5)};

  span {
    padding-inline: ${theme.spacing(3)};

    color: ${getTextColor};
    border: 1px solid ${getTextColor};
    border-radius: 6px;
  }
`;

export const BtnWrapper = styled.div`
  padding: 5px 10px;
  inline-size: 280px;

  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 0px 0px 0px 30px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  position: absolute;
  transform: translate(10px, 20px);

  span {
    padding-inline-end: ${theme.spacing(90)};

    color: transparent;
    transition: color ${theme.transition};
  }
`;

export const BtnDel = styled.button`
  margin-inline-start: auto;
  padding: ${theme.spacing(2)};

  display: block;
  border: none;
  background-color: transparent;
  font-weight: 600;
  transition: color ${theme.transition};

  &:hover {
    color: ${theme.colors.advanced};

    span {
      color: ${theme.colors.advanced};
    }
  }
`;
