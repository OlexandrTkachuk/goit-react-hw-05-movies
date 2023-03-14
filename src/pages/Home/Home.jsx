import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTrendMovies } from 'services/themoviedb-api';
import { Container } from 'components/Container/Container';

import {
  ImageGalleryList,
  Title,
  ImageGalleryItem,
  ImageGalleryItemTitle,
  ImageGalleryItemImage,
} from './Home.styled';

export const Home = () => {
  const [trandMovies, setTrandMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    try {
      getTrendMovies().then(response => {
        setTrandMovies([...response.results]);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Container>
      <Title>Trend Movies</Title>

      <ImageGalleryList>
        {trandMovies.map(({ id, poster_path, original_title }) => {
          return (
            <ImageGalleryItem key={id}>
              <Link to={`movies/${id}`} state={{ from: location }}>
                <ImageGalleryItemImage
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  alt={original_title}
                  width="300"
                />
                <ImageGalleryItemTitle>{original_title}</ImageGalleryItemTitle>
              </Link>
            </ImageGalleryItem>
          );
        })}
      </ImageGalleryList>
    </Container>
  );
};
