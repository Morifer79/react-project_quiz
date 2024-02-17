import styled from 'styled-components';

const getBorderColor = p => {
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
  padding: 8px;
  border: 1px solid ${getBorderColor};
  border-radius: 6px;
`;

export const Topic = styled.h2`
  margin: 0;
  margin-bottom: 12px;
`;

export const MetaWrapper = styled.div`
  display: flex;
  gap: 5px;
`;

export const Text = styled.p``;

export const BtnDel = styled.button`
  margin: 0;
  padding: 4px;
  color: #000;
  border: 1px solid #000;
  background-color: transparent;
  font-weight: 600;
  border-radius: 6px;

  &:hover{
    color: #fff;
    background-color: #000;
  }
`;
