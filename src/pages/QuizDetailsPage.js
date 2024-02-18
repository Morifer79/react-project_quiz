import { fetchQiuzById } from 'api';
import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

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
        console.log('Error');
      } finally {
        setLoading(false);
      }
    }
    fetchQiuz();
  }, [params.quizId]);

  return (
    <div>
      <Link to={location?.state?.from ?? '/quizzes'}>Back to quizzes</Link>
      {quiz && <div>{quiz.topic}</div>}
      {loading && <div>Loding...</div>}
      {error && !loading && <div>Error</div>}
    </div>
  );
}