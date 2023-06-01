import { useEffect, useState } from 'react';
import { getDataByAxios } from 'sevices/library';

import Search from 'components/Search/Search';
import MovieList from 'components/MovieList/MovieList';

const Movies = () => {
  const [paginationPage, setPaginationPage] = useState(1);
  const [searchText, setSearchText] = useState('');
  const [totalPages, setTotalPages] = useState(0);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getDataByAxios(`/search/movie`, paginationPage, searchText).then(resp => {
      if (resp.status !== 200) {
        throw new Error(resp.statusText);
      } else {
        // console.log('resp ', resp);
        setTotalPages(resp.data.total_pages);
        setMovieList(resp.data.results);
      }
    });
  }, [paginationPage, searchText]);

  const createSearchText = searchText => {
    // console.log('search text >>', searchText.trim());
    setSearchText(searchText.trim());
    setPaginationPage(1);
  };

  const onLoadNextPage = () => {
    setPaginationPage(paginationPage + 1);
  };

  const onLoadPreviousPage = () => {
    setPaginationPage(paginationPage - 1);
  };

  const onToStartPage = () => {
    setPaginationPage(1);
  };

  const title = `Search "${searchText}" (Page ${paginationPage} of ${totalPages})`;

  return (
    <div>
      <Search on onSubmit={createSearchText} />
      {searchText && <h3>{title}</h3>}
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

export default Movies;
