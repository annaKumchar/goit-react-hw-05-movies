import PropTypes from 'prop-types';

import {
  MovieDescriptionContainer,
  MovieImage,
  MovieInfoContainer,
  MovieTitle,
  MovieInfoWrap,
  MovieInfoTitle,
  MovieInfo,
  GenersList,
  GenersListItem,
} from './MovieDetails.styled';

export default function MovieDescription({ movieDetails }) {
  const { poster_path, original_title, vote_average, overview, genres } =
    movieDetails;
  const voteAveragePercent = Math.floor(Number(vote_average) * 10);

  return (
    <MovieDescriptionContainer>
      <MovieImage
        src={`https://image.tmdb.org/t/p/w400/${poster_path}`}
        alt=""
      />
      <MovieInfoContainer>
        <MovieTitle>{original_title}</MovieTitle>

        <MovieInfoWrap>
          <MovieInfoTitle>User rate:</MovieInfoTitle>
          <MovieInfo>{` ${voteAveragePercent}%`}</MovieInfo>
        </MovieInfoWrap>

        <MovieInfoTitle>Overview:</MovieInfoTitle>
        <MovieInfo>{overview}</MovieInfo>

        <MovieInfoWrap>
          <MovieInfoTitle>Geners:</MovieInfoTitle>
          <GenersList>
            {genres.map(({ id, name }) => (
              <GenersListItem key={id}>{name}</GenersListItem>
            ))}
          </GenersList>
        </MovieInfoWrap>
      </MovieInfoContainer>
    </MovieDescriptionContainer>
  );
}

MovieDescription.propTypes = {
  movieDetails: PropTypes.object.isRequired,
};
