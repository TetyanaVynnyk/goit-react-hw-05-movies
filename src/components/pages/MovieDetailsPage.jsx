import { useState, useEffect } from 'react';
import {
  useParams,
  useNavigate,
  useLocation,
  Link,
  Outlet,
} from 'react-router-dom';

import { fetchFilmToId } from 'shared/services/movies-api';

import Loader from 'shared/Loader';

import styles from './movies-details-page.module.css';

const MoviesDetailsPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';

  const goBack = () => navigate(from);

  useEffect(() => {
    const getTrandingMovie = async () => {
      setLoading(true);

      try {
        const { data } = await fetchFilmToId(movieId);
        setMovies(data);
      } catch (error) {
        setError(error.massage);
      } finally {
        setLoading(false);
      }
    };
    getTrandingMovie(movieId);
  }, [movieId]);

  const { title, poster_path, overview, genres, vote_average } =
    movies;

  const genresList = genres?.map(genre => genre.name).join(', ');

  const userScore = () => {
    const scorePecentage = () => {
      return Math.round(vote_average * 10);
    };
    const userScorePecentage = scorePecentage();

    return (
      <p className={styles.MovieDetailsUserScore}>
        User score:&ensp;
        {userScorePecentage}% 
      </p>
    );
  };

  const Score = userScore();

  return (
    <>
      <button className={styles.goBack} onClick={goBack}>
        Go back
      </button>
      {loading && <Loader />}
      {error && <p>{error.massage}</p>}
      <div className={styles.MovieDetailsContainer}>
        <div className={styles.MovieDetailsImage}>
          <img className={styles.image}
            src={
              poster_path === undefined
                ? `poster not found`
                : `https://image.tmdb.org/t/p/w500${poster_path}`
            }
            alt=""
          ></img>
        </div>
        <div className={styles.MovieDetailsDescription}>
          <h2 className={styles.MovieDetailsTitle}>{title}</h2>
          {vote_average > 0 && Score}
          <p className={styles.MovieDetailsSubTitle}>Brief description</p>
          <p>{overview !== '' ? overview : 'No brief description'}</p>
          <p className={styles.MovieDetailsSubTitle}>Genres</p>
          <p>{genresList !== '' ? genresList : 'Genres not found'}</p>
        </div>
      </div>
      <div className={styles.MovieDetailsInfo}>
        <p className={styles.MovieDetailsSubInfo}>Additional information:</p>
        <div className={styles.MovieDetailsTextInfo}>
          <Link className={styles.link} state={{ from }} to={`cast`}>
            Cast
          </Link>
          <Link className={styles.link} state={{ from }} to={`reviews`}>
            Reviews
          </Link>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MoviesDetailsPage;