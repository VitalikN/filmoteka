import { fetchTrending } from './themoviedb-api-service';
import { markupTrending, markupModalFilmInfo } from './markup-service';

const page = 5;
let filmList;

const gallery = document.querySelector('.gallery');
gallery.addEventListener('click', onCardClick);

const modalFilmInfo = document.querySelector('.modal-film-info');

showGallery();

async function showGallery() {
  const data = await fetchTrending(page);
  filmList = data.results;
  markupTrending(filmList, gallery);
}

function onCardClick(event) {
  const filmBox = event.target.closest('.film-box');
  if (!filmBox) return;
  const filmBoxId = Number(filmBox.dataset.id);
  const targetFilm = filmList.find(film => film.id === filmBoxId);
  markupModalFilmInfo(targetFilm, modalFilmInfo);
}
