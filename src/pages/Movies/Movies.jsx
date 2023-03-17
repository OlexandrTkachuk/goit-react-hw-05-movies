import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getMovieByName } from 'services/themoviedb-api';
import defaultImage from './defaultImage.jpeg';
import { SearchForm } from 'components/SearchForm/SearchForm';

import {
  ImageGalleryItem,
  ImageGalleryItemImage,
  ImageGalleryItemTitle,
  ImageGalleryList,
  Title,
} from 'pages/Home/Home.styled';

const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useSearchParams();
  const query = searchQuery.get('query') ?? '';
  const location = useLocation();

  const handleFormSubmit = inputValue => {
    setSearchQuery(inputValue !== '' ? { query: inputValue } : {});
  };

  useEffect(() => {
    if (query) {
      try {
        getMovieByName(query).then(response => {
          setSearchMovies([...response.results]);
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, [query]);

  return (
    <>
      <SearchForm onSubmit={handleFormSubmit}></SearchForm>

      {searchMovies.length === 0 && query !== '' && (
        <Title
          style={{
            textAlign: 'center',
            fontSize: '30px',
            fontWeight: '700',
          }}
        >
          The search <span style={{ color: '#a01d1d' }}>{query} </span>
          did not give results
        </Title>
      )}

      {searchMovies.length > 0 && (
        <Title style={{ textAlign: 'center' }}>
          Search results for keyword{' '}
          <span style={{ color: '#a01d1d' }}>{query} </span>:
        </Title>
      )}

      <ImageGalleryList>
        {searchMovies.map(({ id, poster_path, original_title }) => {
          return (
            <ImageGalleryItem key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                <ImageGalleryItemImage
                  src={
                    !poster_path
                      ? defaultImage
                      : `https://image.tmdb.org/t/p/w500/${poster_path}`
                  }
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

export default Movies;
