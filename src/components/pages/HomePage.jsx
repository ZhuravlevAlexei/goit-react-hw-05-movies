import { useEffect, useState } from 'react';
import { getDataByAxios } from 'sevices/library';
import MovieList from 'components/MovieList/MovieList';

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
      {movieList.length !== 0 && (
        <MovieList
          movieList={movieList}
          paginationPage={paginationPage}
          totalPages={totalPages}
          onLoadNextPage={onLoadNextPage}
          onLoadPreviousPage={onLoadPreviousPage}
          onToStartPage={onToStartPage}
        />
      )}
    </div>
  );
};

export default HomePage;
