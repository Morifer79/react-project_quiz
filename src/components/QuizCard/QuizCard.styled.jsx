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
  height: 200px;
  width: 300px;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 0px 30px;
  outline: 0px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const Topic = styled.h2`
  margin-block-end: 10px;
`;

export const MetaWrapper = styled.div`
  height: 130px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 0px 30px 0px 0px;
  padding: 5px 10px;
  margin: 0px 10px;
  top: 10px;
  width: 280px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  position: relative;
`;

export const Text = styled.p``;

export const TextLevel = styled.p`
  margin-block-end: 10px;

  span {
    color: ${getTextColor};
    border: 1px solid ${getTextColor};
    border-radius: 6px;
    padding-inline: 6px;
  }
`;

export const BtnWrapper = styled.div`
  padding: 5px 10px;
  width: 280px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 0px 0px 0px 30px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  position: absolute;
  transform: translate(10px, 20px);
  span{
    padding-right: 180px;
    color: transparent;
  }
`;

export const BtnDel = styled.button`
  display: block;
  margin-left: auto;
  padding: 4px;
  color: #000;
  border: none;
  background-color: transparent;
  font-weight: 600;

  &:hover {
    color: red;
    span{
    color: red;
  }
  }
  /* &:hover span{
    color: red;
  } */
`;
