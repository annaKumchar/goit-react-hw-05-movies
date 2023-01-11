import React, { Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import { TrendMovieList, TrendMovieItem, InfoLink } from './MovieList.styled';

export const TrendingMovieList = ({ movieList }) => {
  const location = useLocation();

  return (
    <>
      <TrendMovieList>
        {movieList.map(({ id, poster_path, title }) => (
          <TrendMovieItem key={id}>
            <InfoLink to={`/movies/${id}`} state={{ from: location }}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt={title}
                height="250"
                width=""
              />
              <p>{title}</p>
            </InfoLink>
          </TrendMovieItem>
        ))}
      </TrendMovieList>
      <Suspense fallback={<h1>Loading...</h1>}></Suspense>
    </>
  );
};
