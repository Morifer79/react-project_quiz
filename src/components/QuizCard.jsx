export const QuizCard = ({quiz}) => {
  return (
    <div>
      <h2>{quiz.topic}</h2>
      <div>
        <p>Level: {quiz.level}</p>
        <p>Time: {quiz.time}</p>
        <p>Questions: {quiz.questions}</p>  
      </div>
    </div>
  );
};
