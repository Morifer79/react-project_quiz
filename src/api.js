import axios from 'axios';

axios.defaults.baseURL = 'https://65d1db83987977636bfb900e.mockapi.io';

export const fetchQiuzzes = async () => {
  const { data } = await axios.get('/quizzes');
  return data;
};

export const deleteQiuzById = async quizId => {
  const { data } = await axios.delete(`/quizzes/${quizId}`);
  return data;
};

export const createQuiz = async quiz => {
  const { data } = await axios.post('/quizzes', quiz);
  return data;
};
