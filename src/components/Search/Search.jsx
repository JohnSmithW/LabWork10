import React from 'react';
import state from '../../store';
import { view } from '@risingstack/react-easy-state';
import getInputValue from '../../actions/getInputValue';
import search from '../../actions/search';
import './Search.css';

function Search() {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
      className="search">
      <input onChange={getInputValue} value={state.searchInputValue} placeholder="Type somehting..." className="search__input" type="text" />
      <button onClick={search} type="submit" className="search__button">
        Search
      </button>
    </form>
  );
}

export default view(Search);
