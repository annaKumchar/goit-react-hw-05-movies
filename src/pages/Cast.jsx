import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'components/MovieAPI/FetchMovie';
import {
  CastList,
  CastItem,
  CastImg,
  CastName,
  CastCharacter,
} from 'components/Cast/Cast.styled';
import nophoto from '../images/nophoto.png'

export default function MovieCast() {
  const [filmCast, setFilmCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getCast() {
      const cast = await getMovieCast(movieId);
      setFilmCast(cast);
    }
    getCast();
  }, [movieId]);

  if (!filmCast) {
    return;
  }

  return (
    <section>
      <div>
        <CastList>
          {filmCast &&
            filmCast.map(({ id, profile_path, name, character }) => (
              <CastItem key={id}>
                <CastImg 
                  src={profile_path?`https://image.tmdb.org/t/p/w200/${profile_path} `: nophoto}
                  alt={name}
                />
                <CastName>{name}</CastName>
                <CastCharacter>Character:{character}</CastCharacter>
              </CastItem>
            ))}
        </CastList>
      </div>
    </section>
  );
}
