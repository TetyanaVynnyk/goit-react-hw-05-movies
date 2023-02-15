import { useState } from 'react';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

import PropTypes from 'prop-types';

import styles from './movies-search-form.module.css';

const MovieSearchForm = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleChange = ({ target }) => {
    const { value } = target;
    setSearch(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (search.trim() === '') {
      return Notify.info('Please enter search query');
    }
    onSubmit(search);
    setSearch('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={styles.searchInput}
        name="search"
        value={search}
        onChange={handleChange}
        placeholder="Please enter search query"
      />
      <button className={styles.searchBtn}>Search</button>
    </form>
  );
};

export default MovieSearchForm;

MovieSearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
