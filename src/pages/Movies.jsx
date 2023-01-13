import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesQuery } from 'components/MovieAPI/FetchMovie';
import { MovieList } from 'components/MovieList/MovieList';
import {
  SearchForm,
  SearchLabel,
  SearchInput,
  SearchButton,
} from 'components/MovieList/SearchMovie.styled';

import Notiflix from 'notiflix';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchMovies, setSearchMovies] = useState([]);
  const [movieQuery, setMovieQuery] = useState('');

  const movieName = searchParams.get('query') ?? '';

  const handleSubmit = e => {
    e.preventDefault();
    if (movieQuery === movieName) {
      return Notiflix.Notify.failure('Enter movie name. Please!');
    }
    setSearchParams(movieQuery !== '' ? { query: movieQuery } : {});
  };

  useEffect(() => {
    if (movieName === '') {
      return;
    }
    async function getMovieByQuery() {
      const searchMovies = await getMoviesQuery(movieName);
      setSearchMovies(searchMovies.results);
    }
    getMovieByQuery();
    setMovieQuery(movieName);
  }, [movieName]);

  return (
    <>
      <SearchLabel>Search Movies</SearchLabel>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          value={movieQuery}
          onChange={e => setMovieQuery(e.target.value)}
          autoFocus
          placeholder="Search movie"
        />
        <SearchButton type="submit">Search</SearchButton>
      </SearchForm>
      <MovieList movieList={searchMovies} />
    </>
  );
}
