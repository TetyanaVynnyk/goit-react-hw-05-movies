import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchReviewsFilmToId } from 'shared/services/movies-api';

import Loader from 'shared/Loader';

import styles from './reviews-page.module.css';

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const getReviewsMovie = async () => {
      setLoading(true);
      try {
        const { data } = await fetchReviewsFilmToId(movieId);
        setReviews(data.results);
      } catch (error) {
        setError(error.massage);
      } finally {
        setLoading(false);
      }
    };
    getReviewsMovie(movieId);
  }, [movieId]);

  const renderReviewsList = reviews?.map(
    ({ id, author, content, created_at }) => {
      return (
        <li key={id} className={styles.reviewsItem}>
          <div>
            <h4 className={styles.reviewsAuthorName}>Author: {author}</h4>

            <p>{content}</p>
            <p>Created at: {created_at}</p>
          </div>
        </li>
      );
    }
  );

  return (
    <div>
      <h3 className={styles.reviewsTitle}>Reviews</h3>
      {loading && <Loader />}
      {error && <p>{error.massage}</p>}
      <ul className={styles.reviewsList}>{renderReviewsList}</ul>
    </div>
  );
};

export default ReviewsPage;