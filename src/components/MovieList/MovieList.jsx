import { Link } from 'react-router-dom';
import { Button } from 'components/Button/Button';
import css from './MovieList.module.css';

const MovieList = ({
  movieList,
  paginationPage,
  totalPages,
  onLoadNextPage,
  onLoadPreviousPage,
  onToStartPage,
}) => {
  return (
    <>
      <ul>
        {movieList.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
      <div className={css.buttonWrap}>
        {movieList.length !== 0 && paginationPage > 1 && (
          <>
            <Button btnName={'Start page'} onClick={onToStartPage} />
            <Button btnName={'Previous page'} onClick={onLoadPreviousPage} />
          </>
        )}
        {movieList.length !== 0 && paginationPage < totalPages && (
          <Button btnName={'Next page'} onClick={onLoadNextPage} />
        )}
      </div>
    </>
  );
};

export default MovieList;
