import { TopicFilter } from '../TopicFilter';
import { LevelFilter } from '../LevelFilter';
import { useQueryParams } from 'hooks/useQueryParams';
import { BtnRst, Container } from './SearchBar.styled';

export const SearchBar = () => {
  const {resetFilters } = useQueryParams();

  return (
    <Container>
      <TopicFilter/>
      <LevelFilter/>
      <BtnRst onClick={resetFilters}>RESET</BtnRst>
    </Container>
  );
};
