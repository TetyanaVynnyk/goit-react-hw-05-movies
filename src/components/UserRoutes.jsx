import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Loader from "../shared/Loader";

const Homepage = lazy(() => import('./pages/Homepage'));
const MoviesSearchPage = lazy(() => import('./pages/MoviesSearchPage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage'));
const CastPage = lazy(() => import('./pages/CastPage'));
const ReviewsPage = lazy(() => import('./pages/ReviewsPage'));


const UserRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/movies" element={<MoviesSearchPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<CastPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
        </Route>
        <Route path="*" element={<Homepage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;