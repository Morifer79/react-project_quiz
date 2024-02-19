import { QuizCard } from '../QuizCard/QuizCard';
import { List } from './QuizList.styled';

export const QuizList = ({ items, onDelete }) => {
  return (
    <List>
      {items.map(item => (
        <li key={item.id}>
          <QuizCard quiz={item} onDelete={onDelete} />
        </li>
      ))}
    </List>
  );
};
