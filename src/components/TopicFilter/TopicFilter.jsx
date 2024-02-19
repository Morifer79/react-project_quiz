import { useQueryParams } from 'hooks/useQueryParams';
import { StyledInput } from './TopicFilter.styled';

export const TopicFilter = () => {
  const { topic, changeTopic } = useQueryParams();

  return (
    <StyledInput
      type="search"
      placeholder="Enter the topic"
      value={topic}
      onChange={e => changeTopic(e.target.value)}
    />
  );
};
