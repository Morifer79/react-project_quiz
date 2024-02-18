export const SearchBar = ({ level, topic, onChangeLevel, onChangeTopic, onReset }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Topic frilter"
        value={topic}
        onChange={e => onChangeTopic(e.target.value)}
      />
      <select value={level} onChange={e => onChangeLevel(e.target.value)}>
        <option value="all">All</option>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
      </select>
      <button onClick={onReset}>Reset filters</button>
    </div>
  );
};
