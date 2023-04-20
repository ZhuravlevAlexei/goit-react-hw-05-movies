import { Link } from 'react-router-dom';

const MovieList = ({ movieList }) => {
  return (
    <ul>
      {movieList.map(({ id, title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
