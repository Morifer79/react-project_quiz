import { Link, useLocation } from 'react-router-dom';
import { BtnDel, MetaWrapper, Text, Topic, Wrapper } from './QuizCard.styled';

export const QuizCard = ({
  quiz: { id, topic, level, time, questions },
  onDelete,
}) => {
  const location = useLocation();
  return (
    <Wrapper level={level}>
      <Link to={`/quizzes/${id}`} state={{from: location}}><Topic>{topic}</Topic></Link>
      <MetaWrapper>
        <Text>
          <b>Level:</b> {level}
        </Text>
        <Text>
          <b>Time:</b> {time}
        </Text>
        <Text>
          <b>Questions:</b> {questions}
        </Text>
      </MetaWrapper>
      <BtnDel onClick={() => onDelete(id)}>Delete</BtnDel>
    </Wrapper>
  );
};
