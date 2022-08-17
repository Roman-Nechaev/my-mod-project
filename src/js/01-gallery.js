import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

/////////////////////////////////////
const galleryRef = document.querySelector('.gallery');

const rendererImage = MarkupRendererImage(galleryItems);
galleryRef.insertAdjacentHTML('beforeend', rendererImage);

function MarkupRendererImage(gallery) {
  return gallery

    .map(({ preview, original, description }) => {
      return `
  <a class="gallery__item" href="${original}">

  <img class="gallery__image" src="${preview}" 

  alt="${description}" />
</a>`;
    })
    .join('');
} // рендер  разметки гелереи

var lightbox = new SimpleLightbox('.gallery a', {
  /* options */
  captionsData: 'alt',
  captionDelay: 250,
}); // библиотека
