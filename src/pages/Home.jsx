import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'components/MovieAPI/FetchMovie';
import { Title } from 'components/MovieList/MovieList.styled';
import { MovieList } from 'components/MovieList/MovieList';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const { results } = await getTrendingMovies();

      setMovies(results);
    };

    getMovies();
  }, []);

  return (
    <>
      <Title>Trending today</Title>
      <MovieList movieList={movies} />
    </>
  );
}
