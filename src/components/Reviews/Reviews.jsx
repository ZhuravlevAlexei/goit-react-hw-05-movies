import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDataByAxios } from 'sevices/library';
import css from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieRevews, setMovieReviews] = useState([]);
  useEffect(() => {
    getDataByAxios(`/movie/${movieId}/reviews`, 0, '').then(resp => {
      if (resp.status !== 200) {
        throw new Error(resp.statusText);
      } else {
        setMovieReviews(resp.data.results);
      }
    });
  }, [movieId]);
  return (
    <div>
      {movieRevews.length === 0 ? (
        <h4 className={css.reviewsTitle}>
          We don't have any reviews for this movie.
        </h4>
      ) : (
        <h4 className={css.reviewsTitle}>Reviews</h4>
      )}
      {movieRevews.length && (
        <ul>
          {movieRevews.map(({ id, author, content }) => (
            <li key={id}>
              <h4>Author: {author}</h4>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Reviews;
