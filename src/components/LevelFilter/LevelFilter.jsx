import { useQueryParams } from 'hooks/useQueryParams';
import { StyledSelect } from './LevelFilter.styled';

export const LevelFilter = () => {
  const { level, changeLevel } = useQueryParams();

  return (
    <StyledSelect value={level} onChange={e => changeLevel(e.target.value)}>
      <option value="all">All</option>
      <option value="beginner">Beginner</option>
      <option value="intermediate">Intermediate</option>
      <option value="advanced">Advanced</option>
    </StyledSelect>
  );
};
