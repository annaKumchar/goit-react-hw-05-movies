import { useEffect, useState } from 'react';
import { useLocation, useParams, Outlet } from 'react-router-dom';
import { getMovieById } from 'components/MovieAPI/FetchMovie';
import MovieDescription from 'components/MovieDescription/MovieDescription';
import {
  MovieContainer,
  BackLink,
  Link,
  AdditonalTitle,
  AdditonalInfoList,
  AdditonalInfoItem,
} from 'components/MovieDescription/MovieDetails.styled';

export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();
  const { movieId } = useParams();

  const backLink = location.state?.from ?? '/';

  useEffect(() => {
    async function getFilmDetails() {
      const film = await getMovieById(movieId);
      setMovieDetails(film);
    }
    getFilmDetails();
  }, [movieId]);

  if (movieDetails === null) {
    return;
  }

  return (
    <MovieContainer>
      <BackLink className="backLink" to={backLink}>
        Go Back
      </BackLink>
      <MovieDescription
        movieDetails={movieDetails}
        location={location}
        movieId={movieId}
      />
      <AdditonalTitle>Additonal Information</AdditonalTitle>
      <AdditonalInfoList>
        <AdditonalInfoItem>
          <Link to="cast" state={{ from: backLink }}>
            Cast
          </Link>
        </AdditonalInfoItem>
        <AdditonalInfoItem>
          <Link to="reviews" state={{ from: Link }}>
            Reviews
          </Link>
        </AdditonalInfoItem>
      </AdditonalInfoList>
      <Outlet />
    </MovieContainer>
  );
}
