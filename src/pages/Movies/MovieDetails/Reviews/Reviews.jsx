import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviewsById } from 'services/themoviedb-api';
import {
  ReviewAuthor,
  ReviewContent,
  ReviewItem,
  ReviewText,
  ReviewWrapper,
} from './Reviews.styled';

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
      {!movieReviews.length ? (
        <ReviewText>We don not have any reviews for this movie</ReviewText>
      ) : (
        <ReviewWrapper>
          {movieReviews.map(({ id, author, content }) => {
            return (
              <ReviewItem key={id}>
                <ReviewAuthor>{author}</ReviewAuthor>
                <ReviewContent>{content}</ReviewContent>
              </ReviewItem>
            );
          })}
        </ReviewWrapper>
      )}
    </>
  );
};
