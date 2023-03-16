import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTrendMovies } from 'services/themoviedb-api';

import {
  ImageGalleryList,
  Title,
  ImageGalleryItem,
  ImageGalleryItemTitle,
  ImageGalleryItemImage,
} from './Home.styled';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    try {
      getTrendMovies().then(response => {
        setTrendMovies([...response.results]);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <Title>Trend Movies</Title>

      <ImageGalleryList>
        {trendMovies.map(({ id, poster_path, original_title }) => {
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
    </>
  );
};

export default Home;
