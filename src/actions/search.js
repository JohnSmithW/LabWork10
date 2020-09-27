import state from '../store';
import fetchGifs from './fetchGifs';

export default function search() {
  if (state.searchInputValue !== '') {
    state.giphyApi.q = state.searchInputValue;
    state.gifs = [];
    fetchGifs();
  }
}
