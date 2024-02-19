import { fetchQiuzById } from 'api';
import { Loader } from 'components/Loader';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { BtnBack, Container, DownWrapper, ExampleDiv, Wrapper } from './QuizDetailsPage.styled';
import {
  TextLevel,
  Topic,
} from 'components/QuizCard/QuizCard.styled';
import toast from 'react-hot-toast';

export default function QuizDetailsPage() {
  const [quiz, setQuiz] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const params = useParams();
  const location = useLocation();

  useEffect(() => {
    async function fetchQiuz() {
      try {
        setLoading(true);
        setError(false);
        const fetchedQuiz = await fetchQiuzById(params.quizId);
        setQuiz(fetchedQuiz);
      } catch (error) {
        setError(true);
        toast.error('Something went wrong...', {
          duration: 3000,
          position: 'top-right',
          icon: '❌',
        });
      } finally {
        setLoading(false);
      }
    }
    fetchQiuz();
  }, [params.quizId]);

  return (
    <>
      {quiz && (
        <Container>
          <Wrapper>
            <Topic>{quiz.topic}</Topic>
            <TextLevel level={quiz.level}>
              <b>Level:</b> <span>{quiz.level}</span>
            </TextLevel>
            <p>
              <b>Time:</b> {quiz.time}
            </p>
            <p>
              <b>Questions:</b> {quiz.questions}
            </p>
            <BtnBack to={location?.state?.from ?? '/quizzes'}>
              Back to quizzes
            </BtnBack>
          </Wrapper>
          <DownWrapper>
          <ExampleDiv>
            FOR EXAMPLE:
              <ol>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem culpa illo veniam laborum id est eveniet nesciunt.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium optio iusto enim deleniti perferendis repellendus.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis obcaecati exercitationem repellendus, amet quas!</li>
                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum quas architecto velit, dolor, dignissimos expedita molestias!</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, magnam enim.</li>
                <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore sit, odio minus provident adipisci qui?</li>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem quaerat consectetur dolor harum iste.</li>
                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima nobis qui impedit eius.</li>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias natus qui quae odio modi eveniet.</li>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos eligendi veritatis illo. Magni cupiditate maiores dolore?</li>
              </ol>
          </ExampleDiv>
          </DownWrapper>
        </Container>
      )}

      {loading && <Loader />}
      {error && !loading && toast.error('Something went wrong...', {
          duration: 3000,
          position: 'top-right',
          icon: '❌',
        })}
    </>
  );
}
