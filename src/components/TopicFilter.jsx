import { useQueryParams } from 'hooks/useQueryParams';

export const TopicFilter = () => {
  const { topic, changeTopic } = useQueryParams();

  return (
    <input
      type="text"
      placeholder="Topic frilter"
      value={topic}
      onChange={e => changeTopic(e.target.value)}
    />
  );
};