import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getMovieByName } from 'services/themoviedb-api';
import { Container } from 'components/Container/Container';
import { SearchForm } from 'components/SearchForm/SearchForm';
import {
  ImageGalleryItem,
  ImageGalleryItemImage,
  ImageGalleryItemTitle,
  ImageGalleryList,
} from 'pages/Home/Home.styled';
import defaultImage from './defaultImage.jpeg';

export const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useSearchParams();

  const query = searchQuery.get('query') ?? '';
  const location = useLocation();

  const handleFormSubmit = searchQueryForm => {
    setSearchQuery(searchQueryForm !== '' ? { query: searchQueryForm } : {});
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
      <Container>
        <SearchForm onSubmit={handleFormSubmit}></SearchForm>

        {searchMovies.length === 0 && query !== '' && (
          <p
            style={{
              textAlign: 'center',
              fontSize: '30px',
              fontWeight: '700',
            }}
          >
            The search <span style={{ color: '#a01d1d' }}>{query}</span> did not
            give results
          </p>
        )}

        {searchMovies.length > 0 && (
          <h1 style={{ textAlign: 'center' }}>
            Search results for keyword{' '}
            <span style={{ color: '#a01d1d' }}>{query}</span>:
          </h1>
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
                  <ImageGalleryItemTitle>
                    {original_title}
                  </ImageGalleryItemTitle>
                </Link>
              </ImageGalleryItem>
            );
          })}
        </ImageGalleryList>
      </Container>
    </>
  );
};
