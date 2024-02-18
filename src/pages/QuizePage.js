import { deleteQiuzById, fetchQiuzzes } from 'api';
import { QuizList } from 'components/QuizList/QuizList';
import { SearchBar } from 'components/SearchBar';
import { useQueryParams } from 'hooks/useQueryParams';
import { useEffect, useState } from 'react';

export default function QuizzesPage() {
  const [quizItems, setQuizItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const {topic, level} = useQueryParams();  

  const visibleItems = quizItems.filter(quiz => {
    const hasTopic = quiz.topic
      .toLowerCase()
      .includes(topic.toLowerCase());
    if (level === 'all') {
      return hasTopic;
    }
    return hasTopic && quiz.level === level;
  });

  const deleteQuiz = async quizId => {
    try {
      setLoading(true);
      setError(false);
      const deletedQuiz = await deleteQiuzById(quizId);
      setQuizItems(prevItems =>
        prevItems.filter(quiz => quiz.id !== deletedQuiz.id)
      );
    } catch (error) {
      setError(true);
      console.log('Error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    async function getQuizzes() {
      try {
        setLoading(true);
        setError(false);
        const quizzes = await fetchQiuzzes();
        setQuizItems(quizzes);
      } catch (error) {
        setError(true);
        console.log('Error');
      } finally {
        setLoading(false);
      }
    }
    getQuizzes();
  }, []);

  return (
    <div>
      <SearchBar/>
      {loading && <div>Loding...</div>}
      {error && !loading && <div>Error</div>}
      {visibleItems.length > 0 && (
        <QuizList items={visibleItems} onDelete={deleteQuiz} />
      )}
    </div>
  );
}
