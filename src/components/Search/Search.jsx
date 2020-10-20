import React from 'react';

import { view } from '@risingstack/react-easy-state';
import search from '../../actions/search';
import './Search.css';

function Search({ searchValue, onChangeSearch }) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
      className="search">
      <input
        onChange={(event) => {
          onChangeSearch(event);
        }}
        value={searchValue}
        placeholder="Type somehting..."
        className="search__input"
        type="text"
      />
      <button onClick={search} type="submit" className="search__button">
        Search
      </button>
    </form>
  );
}

export default view(Search);
