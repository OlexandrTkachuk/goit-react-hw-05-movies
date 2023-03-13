import axios from 'axios';

const API_KEY = 'e8d94f3e976148bda0a5c640d4df112b';

//
//
// Отримуємо список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
export const getTrendMovies = async () => {
  const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/week';
  const response = await axios.get(`${BASE_URL}?api_key=${API_KEY}`);

  return response.data;
};

//
//
// Пошук фільму за ключовим словом на сторінці фільмів.
export const getMovieByName = async query => {
  const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
  const response = await axios.get(
    `${BASE_URL}?api_key=${API_KEY}&query=${query}&page=1`
  );

  return response.data;
};

//
//
// Отримуємо запит повної інформації про фільм для сторінки кінофільму.
export const getMovieDetailsById = async movieId => {
  const BASE_URL = 'https://api.themoviedb.org/3/movie/';
  const response = await axios.get(`${BASE_URL}${movieId}?api_key=${API_KEY}`);

  return response.data;
};

//
//
// Отримуємо запит інформації про акторський склад для сторінки кінофільму.
export const getMovieCreditsById = async movieId => {
  const BASE_URL = 'https://api.themoviedb.org/3/movie';
  const response = await axios.get(
    `${BASE_URL}/${movieId}/credits?api_key=${API_KEY}`
  );

  return response.data;
};

//
//
// Отримуємо запит оглядів для сторінки кінофільму.
export const getMovieReviewsById = async movieId => {
  const BASE_URL = 'https://api.themoviedb.org/3/movie';
  const response = await axios.get(
    `${BASE_URL}/${movieId}/reviews?api_key=${API_KEY}&page=1`
  );

  return response.data;
};
