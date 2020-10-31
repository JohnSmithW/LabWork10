import { store } from '@risingstack/react-easy-state';

const state = store({
  error: false,
  searchInputValue: '',
  giphyApi: { q: 'development', limit: 10, offset: 0 },
  gifs: [],
});

export default state;
