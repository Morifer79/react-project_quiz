import { createQuiz } from 'api';
import { Loader } from 'components/Loader';
import { QuizForm } from 'components/QuizForm/QuizForm';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function CreateQuizPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const addQuiz = async newQuiz => {
    try {
      setLoading(true);
      setError(false);
      await createQuiz(newQuiz);
      toast.success(
        'The quiz has been created and added to the general list.',
        {
          duration: 5000,
          position: 'top-right',
          icon: '🏆',
        }
      );
      toast.success('Continue creating or go to the main list', {
        duration: 5000,
        position: 'top-right',
        icon: '📝',
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
  return (
    <div>
      <QuizForm onAdd={addQuiz} />
      {loading && <Loader />}
      {error &&
        !loading &&
        toast.error('Something went wrong...', {
          duration: 3000,
          position: 'top-right',
          icon: '❌',
        })}
    </div>
  );
}
