import axios from 'axios';

const KEY = 'fc655b0a98b1257d55ec04cdf6dbef33';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const getTrendingMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}trending/movie/day?api_key=${KEY}&language=en-US`
  );
  return response.data;
};

export const getMoviesQuery = async query => {
  const response = await axios.get(
    `${BASE_URL}search/movie?api_key=${KEY}&query=${query}&language=en-US`
  );
  return response.data;
};

export const getMovieById = async id => {
  const response = await axios.get(
    `${BASE_URL}movie/${id}?api_key=${KEY}&language=en-US`
  );
  return response.data;
};

export const getMovieCast = async id => {
  const response = await axios.get(
    `${BASE_URL}movie/${id}/credits?api_key=${KEY}&language=en-US`
  );
  return response.data.cast;
};

export const getMovieReviews = async id => {
  const response = await axios.get(
    `${BASE_URL}movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`
  );
  return response.data.results;
};
