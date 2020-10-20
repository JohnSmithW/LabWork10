import React from 'react';
import state from './store';
import './css/main.css';
import setInputValue from './actions/setInputValue';
import GiphyList from './components/GiphyList/GiphyList';
import Search from './components/Search/Search';

export default function App() {
  return (
    <React.StrictMode>
      <div className="main">
        <GiphyList
          searchValue={state.searchInputValue}
          content={
            <Search
              onChangeSearch={(event) => {
                setInputValue(event);
              }}
            />
          }
        />
      </div>
    </React.StrictMode>
  );
}
