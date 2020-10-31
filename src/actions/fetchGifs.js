import state from '../store';

export default function fetchGifs(q, limit, offset) {
  const url =
    `https://api.giphy.com/v1/gifs/search?api_key=FjKcR8w3kgQZ7xvrPlk1TDncvJXJtI1a&q=${q}&` + `limit=${limit}&offset=${offset}&rating=g&lang=ru`;

  fetch(url)
    .then((response) => response.json())
    .then((gifs) => {
      for (let i = 0; i < gifs.data.length; i += 1) {
        state.gifs.push(gifs.data[i]);
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      state.error = true;
    });

  console.log(q, limit, offset);
}
