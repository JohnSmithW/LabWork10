import state from '../store';

export default function fetchGifs() {
  const url =
    `https://api.giphy.com/v1/gifs/search?api_key=FjKcR8w3kgQZ7xvrPlk1TDncvJXJtI1a&q=${state.giphyApi.q}&` +
    `limit=${state.giphyApi.limit}&offset=${state.giphyApi.offset}&rating=g&lang=ru`;

  fetch(url)
    .then((restponse) => restponse.json())
    .then((gifs) => {
      for (let i = 0; i < gifs.data.length; i += 1) {
        state.gifs.push(gifs.data[i]);
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}
