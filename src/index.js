import './main.css';

/* ---------------------------------- Query --------------------------------- */
const search = document.querySelector('#search');
const REG_EXP = /[^a-zA-Z0-9]/g;

const isValidQuery = () => {
  const rawQuery = search.value.replace(REG_EXP, ' ').trim();
  return rawQuery;
};

const readQuery = () => {
  const rawQuery = search.value.replace(REG_EXP, ' ').trim();
  const query = rawQuery.replace(' ', '+');
  return query;
};

/* --------------------------------- Display -------------------------------- */
const img = document.querySelector('img');
const displayImage = (response) => {
  img.src = response.data.images.original.url;
  img.alt = response.data.title;
};

/* ------------------------------- Fetch Image ------------------------------ */
const API_KEY = 'BHycJDA2vU3JeQ8H8t3w600RVC8k9PJY';
const ENDPOINT = 'api.giphy.com/v1/gifs/translate';

const getImage = (searchTerm) => {
  const url = `https://${ENDPOINT}?api_key=${API_KEY}&s=${searchTerm}`;
  fetch(url)
    .then((response) => response.json())
    .then(displayImage);
};

/* ------------------------------- Form Submit ------------------------------ */
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (isValidQuery()) {
    const query = readQuery();
    getImage(query);
  }
});
