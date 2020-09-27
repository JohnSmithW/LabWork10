import state from '../store';
import fetchGifs from './fetchGifs';

export default function identifyScrollBottom(event) {
  if (event.target.scrollHeight - event.target.scrollTop === event.target.clientHeight) {
    state.giphyApi.offset += 10;
    fetchGifs();
  }
}
