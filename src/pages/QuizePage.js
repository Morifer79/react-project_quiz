import { deleteQiuzById, fetchQiuzzes } from 'api';
import { Loader } from 'components/Loader';
import { QuizList } from 'components/QuizList/QuizList';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { useQueryParams } from 'hooks/useQueryParams';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export default function QuizzesPage() {
  const [quizItems, setQuizItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { topic, level } = useQueryParams();

  const visibleItems = quizItems.filter(quiz => {
    const hasTopic = quiz.topic.toLowerCase().includes(topic.toLowerCase());
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
      toast.success('The quiz has been successfully deleted!', {
        duration: 3000,
        position: 'top-right',
        icon: '✅',
      });
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
        toast.error('Something went wrong...', {
          duration: 3000,
          position: 'top-right',
          icon: '❌',
        });
      } finally {
        setLoading(false);
      }
    }
    getQuizzes();
  }, []);

  return (
    <div>
      <SearchBar />
      {loading && <Loader />}
      {error &&
        !loading &&
        toast.error('Something went wrong...', {
          duration: 3000,
          position: 'top-right',
          icon: '❌',
        })}
      {visibleItems.length > 0 && (
        <QuizList items={visibleItems} onDelete={deleteQuiz} />
      )}
    </div>
  );
}
