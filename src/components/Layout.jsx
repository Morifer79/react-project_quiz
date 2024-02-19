import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { Header } from './Header/Header';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-inline: auto;
`;

export const Layout = () => {
  return (
    <Wrapper>
      <Header />
      <Outlet />
    </Wrapper>
  );
};
