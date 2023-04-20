import { Button } from 'components/Button/Button';
import MovieList from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { getDataByAxios } from 'sevices/library';
import css from './HomePage.module.css';

const HomePage = () => {
  const [paginationPage, setPaginationPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getDataByAxios(`/trending/movie/week`, paginationPage).then(resp => {
      if (resp.status !== 200) {
        throw new Error(resp.statusText);
      } else {
        // console.log('resp ', resp);
        setTotalPages(resp.data.total_pages);
        setMovieList(resp.data.results);
      }
    });
  }, [paginationPage]);

  const onLoadNextPage = () => {
    setPaginationPage(paginationPage + 1);
  };

  const onLoadPreviousPage = () => {
    setPaginationPage(paginationPage - 1);
  };

  const onToStartPage = () => {
    setPaginationPage(1);
  };

  const title = `Trending today (Page ${paginationPage} of ${totalPages})`;

  return (
    <div>
      <h3>{title}</h3>
      {movieList.length !== 0 && <MovieList movieList={movieList} />}
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
    </div>
  );
};

export default HomePage;
