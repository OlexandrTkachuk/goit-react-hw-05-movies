import { Routes, Route } from 'react-router-dom';
import { Home } from 'pages/Home/Home';
import { NotFound } from 'pages/NotFound/NotFound';
import { Header } from 'components/Header/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Movies } from 'pages/Movies/Movies';
import { MovieDetails } from 'pages/Movies/MovieDetails/MovieDetails';
import { Cast } from 'pages/Movies/MovieDetails/Cast/Cast';
import { Reviews } from 'pages/Movies/MovieDetails/Reviews/Reviews';
import { Suspense } from 'react';

export const App = () => {
  return (
    <>
      <Suspense>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/movies" element={<Movies />} />

          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastContainer />
      </Suspense>
    </>
  );
};
