import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviewsById } from 'services/themoviedb-api';
import { isEmpty } from 'lodash';

export const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    try {
      getMovieReviewsById(movieId).then(response => {
        setMovieReviews(response.results);
      });
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  return (
    <>
      {isEmpty(movieReviews) ? (
        <p>We don not have any reviews for this movie</p>
      ) : (
        <ul>
          {movieReviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <b>{author}</b>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
