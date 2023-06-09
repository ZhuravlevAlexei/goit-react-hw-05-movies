import { useState } from 'react';
// import PropTypes from 'prop-types';
import css from './Search.module.css';

const Search = ({ handleSubmit, handleSearchbarInputChange, searchText }) => {
  // const [searchInputText, setSearchInputText] = useState('');

  // const handleSubmit = evt => {
  //   evt.preventDefault();
  //   onSubmit(searchInputText);
  // };

  // const handleSearchbarInputChange = ({ target: { value } }) => {
  //   setSearchInputText(value);
  // };

  return (
    <form onSubmit={handleSubmit} className={css.searchForm}>
      <label>
        <input
          className={css.input}
          value={searchText}
          type="text"
          onChange={handleSearchbarInputChange}
          autoComplete="off"
        />
      </label>
      <button className={css.searchBtn} type="submit">
        Search
      </button>
    </form>
  );
};

export default Search;

// Search.propTypes = {
//   handleSubmit: PropTypes.func.isRequired,
//   handleChange: PropTypes.func.isRequired,
//   searchText: PropTypes.string.isRequired,
// };
