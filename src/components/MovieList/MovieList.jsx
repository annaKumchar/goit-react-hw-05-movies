import React, { Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import {
  MovieListEl,
  MoviesTitle,
  MovieItem,
  InfoLink,
  MovieImg,
} from './MovieList.styled';

export const MovieList = ({ movieList }) => {
  const location = useLocation();

  return (
    <>
      <MovieListEl>
        {movieList.map(({ id, poster_path, title }) => (
          <MovieItem key={id}>
            <InfoLink to={`/movies/${id}`} state={{ from: location }}>
              <MovieImg
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt={title}
              />
              <MoviesTitle>{title}</MoviesTitle>
            </InfoLink>
          </MovieItem>
        ))}
      </MovieListEl>
      <Suspense fallback={<h1>Loading...</h1>}></Suspense>
    </>
  );
};
