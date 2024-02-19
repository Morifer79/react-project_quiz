import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderList = styled.ul`
  height: 60px;
  display: flex;
  padding-block: 10px;
  align-items: center;
  justify-content: center;
  gap: 50px;
  border-bottom: 1px solid black;
  box-shadow: 0 0 13px 3px black;
`;

export const StyledLink = styled(NavLink)`
  display: block;
  text-align: center;
  width: 120px;
  font-weight: 600;
  padding: 8px;

  background-image: linear-gradient(to right, #53868B 0%, #e0e022 51%, #53868B 100%);
  flex: 1 1 auto;
  text-align: center;
  transition: 0.5s;
  background-size: 200% auto;
  color: #000000;
  box-shadow: 0 0 20px #000000;
  border-radius: 6px;
  &:hover {
    background-position: right center;
    
  }

  &.active {
    color: #ffffff;
    text-transform: uppercase;
    white-space: nowrap;
  }
`;
