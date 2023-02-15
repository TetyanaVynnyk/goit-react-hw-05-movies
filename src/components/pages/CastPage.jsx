import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchCastFilmToId } from 'shared/services/movies-api';

import Loader from 'shared/Loader';

import styles from './cast-page.module.css';

const CastPage = () => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const getCastMovie = async () => {
      setLoading(true);
      try {
        const { data } = await fetchCastFilmToId(movieId);
        setCast(data.cast);
      } catch (error) {
        setError(error.massage);
      } finally {
        setLoading(false);
      }
    };
    getCastMovie(movieId);
  }, [movieId]);

  const renderCastList = cast?.map(
    ({ cast_id, name, character, profile_path }) => {
      return (
        <li key={cast_id} className={styles.castItem}>
          <div>
            <img
              src={
                profile_path === null
                  ? 'Profile not found'
                  : `https://image.tmdb.org/t/p/w500${profile_path}`
              }
              alt=""
              className={styles.castActorImage}
            />
          </div>
          <div className={styles.castActorInfo}>
            <div className={styles.castActorName}>{name}</div>
            <div className={styles.castActorCharacter}>
              Character: {character}
            </div>
          </div>
        </li>
      );
    }
  );

  return (
    <div>
      <h3 className={styles.castTitle}>Cast</h3>
      {loading && <Loader />}
      {error && <p>{error.massage}</p>}
      <ul className={styles.castList}>{renderCastList}</ul>
    </div>
  );
};

export default CastPage;