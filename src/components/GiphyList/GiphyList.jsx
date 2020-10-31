import React, { useEffect } from 'react';
import state from '../../store';
import { view } from '@risingstack/react-easy-state';
import './GiphyList.css';
import GiphyListItem from '../GiphyListItem/GiphyListItem';

import fetchGifs from '../../actions/fetchGifs';

function GiphyList() {
  useEffect(() => {
    fetchGifs(state.giphyApi.q, state.giphyApi.limit, state.giphyApi.offset);
  }, []);

  function goToGif(url) {
    window.open(url);
  }

  return state.gifs.map((gif) => {
    return state.error ? (
      <span>Something went wrong...</span>
    ) : (
      <GiphyListItem
        key={gif.id}
        url={gif.images.downsized.url}
        label={gif.title}
        goTo={() => {
          goToGif(gif.images.downsized.url);
        }}
      />
    );
  });
}

export default view(GiphyList);
