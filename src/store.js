import { store } from '@risingstack/react-easy-state';

const state = store({
  searchInputValue: '',
  giphyApi: { q: 'development', limit: 10, offset: 0 },
  gifs: [],
});

export default state;
