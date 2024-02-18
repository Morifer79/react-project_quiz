import styled from 'styled-components';
import { NavLink, Outlet } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-inline-size: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export const Layout = () => {
  return (
    <Wrapper>
      <ul>
        <li>
          <StyledLink to="/create">Create Quiz</StyledLink>
        </li>
        <li>
          <StyledLink to="/quizzes">Quiz List</StyledLink>
        </li>
      </ul>
      <Outlet />
    </Wrapper>
  );
};
