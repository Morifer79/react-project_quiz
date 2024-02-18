import { Component } from 'react';
import { QuizForm } from './QuizForm/QuizForm';
import { QuizList } from './QuizList/QuizList';
import { SearchBar } from './SearchBar';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { createQuiz, deleteQiuzById, fetchQiuzzes } from 'api';

export class App extends Component {
  state = {
    quizItems: [],
    loading: false,
    error: false,
    filters: {
      topic: '',
      level: 'all',
    },
  };

  async componentDidMount() {
    const savedFilters = localStorage.getItem('quiz-filters');
    if (savedFilters !== null) {
      this.setState({
        filters: JSON.parse(savedFilters),
      });
    }
    try {
      this.setState({ loading: true, error: false });
      const quizzes = await fetchQiuzzes();
      this.setState({ quizItems: quizzes });
    } catch (error) {
      this.setState({ error: true });
      console.log('Error');
    } finally {
      this.setState({ loading: false });
    }
  }

  componentDidUpdate(prevProp, prevState) {
    if (prevState.filters !== this.state.filters) {
      localStorage.setItem('quiz-filters', JSON.stringify(this.state.filters));
    }
  }

  addQuiz = async newQuiz => {
    try {
      this.setState({ loading: true, error: false });
      const addedQuiz = await createQuiz(newQuiz);
      this.setState(prevState => ({
        quizItems: [...prevState.quizItems, addedQuiz],
      }));
    } catch (error) {
      this.setState({ error: true });
      console.log('Error');
    } finally {
      this.setState({ loading: false });
    }
  };

  deleteQuiz = async quizId => {
    try {
      this.setState({ loading: true, error: false });
      const deletedQuiz = await deleteQiuzById(quizId);
      this.setState(prevState => ({
        quizItems: prevState.quizItems.filter(
          quiz => quiz.id !== deletedQuiz.id
        ),
      }));
    } catch (error) {
      this.setState({ error: true });
      console.log('Error');
    } finally {
      this.setState({ loading: false });
    }
  };

  changeLevelFilter = newLevel => {
    this.setState(prevState => ({
      filters: {
        ...prevState.filters,
        level: newLevel,
      },
    }));
  };

  changeTopicFilter = newTopic => {
    this.setState(prevState => ({
      filters: {
        ...prevState.filters,
        topic: newTopic,
      },
    }));
  };

  resetFilters = () => {
    this.setState({
      filters: {
        topic: '',
        level: 'all',
      },
    });
  };

  getVisibleItems = () => {
    const { quizItems, filters } = this.state;
    return quizItems.filter(quiz => {
      const hasTopic = quiz.topic
        .toLowerCase()
        .includes(filters.topic.toLowerCase());
      if (filters.level === 'all') {
        return hasTopic;
      }
      return hasTopic && quiz.level === filters.level;
    });
  };

  render() {
    const { filters, loading, error } = this.state;
    const visibleItems = this.getVisibleItems();
    return (
      <Layout>
        <QuizForm onAdd={this.addQuiz} />
        <SearchBar
          level={filters.level}
          topic={filters.topic}
          onChangeLevel={this.changeLevelFilter}
          onChangeTopic={this.changeTopicFilter}
          onReset={this.resetFilters}
        />
        {loading && <div>Loding...</div>}
        {error && !loading && <div>Error</div>}
        {visibleItems.length > 0 && (
          <QuizList items={visibleItems} onDelete={this.deleteQuiz} />
        )}
        <GlobalStyle />
      </Layout>
    );
  }
}
