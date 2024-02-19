import { Link, useLocation } from 'react-router-dom';
import { BtnDel, BtnWrapper, MetaWrapper, Text, TextLevel, Topic, Wrapper } from './QuizCard.styled';
import { FaTrashCan } from "react-icons/fa6";

export const QuizCard = ({
  quiz: { id, topic, level, time, questions },
  onDelete,
}) => {
  const location = useLocation();
  return (
    <Wrapper>
      <MetaWrapper>
        <Link to={`/quizzes/${id}`} state={{from: location}}><Topic>{topic}</Topic></Link>
        <TextLevel level={level}>
          <b>Level:</b> <span>{level}</span>
        </TextLevel>
        <Text>
          <b>Time:</b> {time}
        </Text>
        <Text>
          <b>Questions:</b> {questions}
        </Text>
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
