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

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();

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
        <ReviewText>We dont have any reviews for this movie</ReviewText>
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

export default Reviews;
