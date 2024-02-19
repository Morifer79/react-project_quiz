import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { Header } from './Header/Header';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
`;

export const Layout = () => {
  return (
    <Wrapper>
      <Header/>
      <Outlet />
    </Wrapper>
  );
};
