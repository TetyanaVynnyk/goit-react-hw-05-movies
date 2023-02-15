import { useState, useEffect } from 'react';

import { fetchTrendingFilms } from 'shared/services/movies-api';

import MoviesList from 'components/modules/MoviesList/MoviesList';
import Loader from '../../shared/Loader';

import styles from './homepage.module.css';

const Homepage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTrandingMovie = async () => {
      try {
        setLoading(true);
        const { data } = await fetchTrendingFilms();
        setItems(data.results);
      } catch (error) {
        setError(error.massage);
      } finally {
        setLoading(false);
      }
    };
    getTrandingMovie();
  }, []);

  return (
    <div>
      <h2 className={styles.title}>Trending films</h2>
      {loading && <Loader />}
      {error && <p>{error.massage}</p>}
      {items.length > 0 && (
        <MoviesList items={items} loading={loading} error={error} />
      )}
    </div>
  );
};

export default Homepage;