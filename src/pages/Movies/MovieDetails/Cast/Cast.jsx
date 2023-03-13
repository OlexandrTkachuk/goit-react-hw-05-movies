import { useState, useEffect } from 'react';
import { getMovieCreditsById } from 'services/themoviedb-api';
import { useParams } from 'react-router-dom';
import { isEmpty } from 'lodash';
import { CastItem, CastWrapper } from './Cast.styled';
import defaultImage from '../../defaultImage.jpeg';

export const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    try {
      getMovieCreditsById(movieId).then(response => {
        setMovieCast(response.cast.splice(0, 8));
      });
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  return (
    <>
      {isEmpty(movieCast) ? (
        <p>Sorry! We do not have information about this movie</p>
      ) : (
        <CastWrapper>
          {movieCast.map(({ id, profile_path, name, character }) => {
            return (
              <CastItem key={id}>
                <img
                  src={
                    !profile_path
                      ? defaultImage
                      : `https://image.tmdb.org/t/p/w500/${profile_path}`
                  }
                  alt={`${name}`}
                  width="120px"
                />
                <p>{name}</p>
                <em>{character}</em>
              </CastItem>
            );
          })}
        </CastWrapper>
      )}
    </>
  );
};
