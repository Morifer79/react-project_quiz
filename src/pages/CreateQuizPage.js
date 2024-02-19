import { createQuiz } from 'api';
import { Loader } from 'components/Loader';
import { QuizForm } from 'components/QuizForm/QuizForm';
import { useState } from 'react';

export default function CreateQuizPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const addQuiz = async newQuiz => {
    try {
      setLoading(true);
      setError(false);
      await createQuiz(newQuiz);
    } catch (error) {
      setError(true);
      console.log('Error');
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <QuizForm onAdd={addQuiz} />
      {loading && <Loader/>}
      {error && !loading && <div>Error</div>}
    </div>
  );
}
