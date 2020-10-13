import React, { useEffect } from 'react';
import state from '../../store';
import { view } from '@risingstack/react-easy-state';
import './GiphyList.css';
import GiphyListItem from '../GiphyListItem/GiphyListItem';
import InfiniteScroll from '../InfiniteScroll/InfiniteScroll';

import fetchGifs from '../../actions/fetchGifs';
import identifyScrollBottom from '../../actions/identifyScrollBottom';

function GiphyList({ content }) {
  useEffect(() => {
    fetchGifs();
  }, []);

  function goToGif(url) {
    window.open(url);
  }

  return (
    <div className="list">
      {content}
      <InfiniteScroll
        scroll={(event) => {
          identifyScrollBottom(event);
        }}>
        {state.gifs.map((gif) => {
          return (
            <GiphyListItem
              key={gif.id}
              url={gif.images.downsized.url}
              label={gif.title}
              goTo={() => {
                goToGif(gif.images.downsized.url);
              }}
            />
          );
        })}
      </InfiniteScroll>
    </div>
  );
}

export default view(GiphyList);
