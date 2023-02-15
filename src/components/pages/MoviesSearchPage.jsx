import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { fetchSearchFilms } from 'shared/services/movies-api';

import MoviesSearchForm from 'components/modules/MoviesSearchForm/MoviesSearchForm';
import MoviesList from 'components/modules/MoviesList/MoviesList';
import Loader from 'shared/Loader';

// import styles from './movies-search-page.module.css';

const MoviesSearchPage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        const { data } = await fetchSearchFilms(search);
        setItems(data.results);
      } catch (error) {
        setError(error.massage);
      } finally {
        setLoading(false);
      }
    };

    if (search) {
      fetchMovie();
    }
  }, [search]);

  const changeSearch = search => {
    setSearchParams({ search });
  };

  return (
    <div>
      {loading && <Loader />}
      {error && <p>{error.massage}</p>}
      <MoviesSearchForm onSubmit={changeSearch} />
      {items.length > 0 && <MoviesList items={items} />}
    </div>
  );
};

export default MoviesSearchPage;