import React from 'react';
import state from './store';
import './css/main.css';
import setInputValue from './actions/setInputValue';
import GiphyList from './components/GiphyList/GiphyList';
import Search from './components/Search/Search';
import InfiniteScroll from './components/InfiniteScroll/InfiniteScroll';
import fetchGifs from './actions/fetchGifs';

function identifyScrollBottom(event) {
  if (event.target.scrollHeight - event.target.scrollTop === event.target.clientHeight) {
    state.giphyApi.offset += 10;
    fetchGifs(state.giphyApi.q, state.giphyApi.limit, state.giphyApi.offset);
  }
}

export default function App() {
  return (
    <React.StrictMode>
      <div className="main">
        <div className="container">
          <Search
            onChangeSearch={(event) => {
              setInputValue(event);
            }}
          />
          <InfiniteScroll
            scroll={(event) => {
              identifyScrollBottom(event);
            }}>
            <GiphyList searchValue={state.searchInputValue} />
          </InfiniteScroll>
        </div>
      </div>
    </React.StrictMode>
  );
}
