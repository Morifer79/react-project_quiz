import { useEffect, useState } from 'react';
import { QuizForm } from './QuizForm/QuizForm';
import { QuizList } from './QuizList/QuizList';
import { SearchBar } from './SearchBar';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { createQuiz, deleteQiuzById, fetchQiuzzes } from 'api';

const getInitialFilters = () => {
  const savedFilters = localStorage.getItem('quiz-filters');
  if (savedFilters !== null) {
    return JSON.parse(savedFilters);
  }
  return {
    topic: '',
    level: 'all',
  };
};

export const App = () => {
  const [quizItems, setQuizItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [filters, setFilters] = useState(getInitialFilters);

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

  useEffect(() => {
    localStorage.setItem('quiz-filters', JSON.stringify(filters));
  }, [filters]);

  const addQuiz = async newQuiz => {
    try {
      setLoading(true);
      setError(false);
      await createQuiz(newQuiz);
      setQuizItems(prevItems => [...prevItems, addQuiz]);
    } catch (error) {
      setError(true);
      console.log('Error');
    } finally {
      setLoading(false);
    }
  };

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

  const changeLevelFilter = newLevel => {
    setFilters(prevFilters => ({
      ...prevFilters,
      level: newLevel,
    }));
  };

  const changeTopicFilter = newTopic => {
    setFilters(prevFilters => ({
      ...prevFilters,
      topic: newTopic,
    }));
  };

  const resetFilters = () => {
    setFilters({
      filters: {
        topic: '',
        level: 'all',
      },
    });
  };

  const visibleItems = quizItems.filter(quiz => {
    const hasTopic = quiz.topic
      .toLowerCase()
      .includes(filters.topic.toLowerCase());
    if (filters.level === 'all') {
      return hasTopic;
    }
    return hasTopic && quiz.level === filters.level;
  });

  return (
    <Layout>
      <QuizForm onAdd={addQuiz} />
      <SearchBar
        level={filters.level}
        topic={filters.topic}
        onChangeLevel={changeLevelFilter}
        onChangeTopic={changeTopicFilter}
        onReset={resetFilters}
      />
      {loading && <div>Loding...</div>}
      {error && !loading && <div>Error</div>}
      {visibleItems.length > 0 && (
        <QuizList items={visibleItems} onDelete={deleteQuiz} />
      )}
      <GlobalStyle />
    </Layout>
  );
};
