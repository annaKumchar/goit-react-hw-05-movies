import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'components/MovieAPI/FetchMovie';
import { TrendingMovieList } from 'components/MovieList/MovieList';

export default function Home (){
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
      <h1>Trending today</h1>
      <TrendingMovieList movieList={movies} />
    </>
  );
};
