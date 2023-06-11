import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getDataByAxios } from 'sevices/library';
import Search from 'components/Search/Search';
import MovieList from 'components/MovieList/MovieList';

const Movies = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [movieList, setMovieList] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  let paginationPage = Number(searchParams.get('page'));
  if (paginationPage === 0) {
    paginationPage = 1;
  }
  let searchText = searchParams.get('search') ?? '';
  let title = '';

  // console.log('Initial page ', searchParams.get('page'));
  // console.log('location Movies ', location);
  // console.log('searchParams ', searchParams);

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

  const handleSubmit = evt => {
    evt.preventDefault();
    setSearchParams({ search: searchText.trim(), page: 1 });
    paginationPage = 1;
  };

  const handleSearchInputChange = ({ target: { value } }) => {
    setSearchParams({ search: value, page: paginationPage });
  };

  const onLoadNextPage = () => {
    paginationPage = paginationPage + 1;
    setSearchParams({ search: searchText, page: paginationPage + 1 });
  };

  const onLoadPreviousPage = () => {
    paginationPage = paginationPage - 1;
    setSearchParams({ search: searchText, page: paginationPage - 1 });
  };

  const onToStartPage = () => {
    paginationPage = 1;
    setSearchParams({ search: searchText, page: 1 });
  };

  if (movieList.length === 0) {
    title = 'No matches';
  } else {
    title = `Search "${searchText}" (Page ${paginationPage} of ${totalPages})`;
  }

  return (
    <div>
      <Search
        handleSubmit={handleSubmit}
        handleSearchInputChange={handleSearchInputChange}
        searchText={searchText}
      />
      {searchText && <h3>{title}</h3>}
      {movieList.length !== 0 && (
        <MovieList
          location={location}
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
