import { HeaderList, StyledLink } from './Header.styled';

export const Header = () => {
  return (
    <HeaderList>
      <li>
        <StyledLink to="/quizzes">quiz list</StyledLink>
      </li>
      <li>
        <StyledLink to="/create">create quiz</StyledLink>
      </li>
    </HeaderList>
  );
};
