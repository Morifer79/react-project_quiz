import { Link, useLocation } from 'react-router-dom';
import {
  BtnDel,
  BtnWrapper,
  MetaWrapper,
  TextLevel,
  Topic,
  Wrapper,
} from './QuizCard.styled';
import { FaTrashCan } from 'react-icons/fa6';

export const QuizCard = ({
  quiz: { id, topic, level, time, questions },
  onDelete,
}) => {
  const location = useLocation();
  return (
    <Wrapper>
      <MetaWrapper>
        <Link to={`/quizzes/${id}`} state={{ from: location }}>
          <Topic>{topic}</Topic>
        </Link>
        <TextLevel level={level}>
          <b>Level:</b> <span>{level}</span>
        </TextLevel>
        <p>
          <b>Time:</b> {time}
        </p>
        <p>
          <b>Questions:</b> {questions}
        </p>
      </MetaWrapper>
      <BtnWrapper>
        <BtnDel onClick={() => onDelete(id)}>
          <span>DELETE</span>
          <FaTrashCan />
        </BtnDel>
      </BtnWrapper>
    </Wrapper>
  );
};
