import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const imageContainer = document.querySelector('.gallery');
const imageMarkup = createGalleryMarkup(galleryItems);

imageContainer.insertAdjacentHTML('beforeend', imageMarkup);

function createGalleryMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `    <div class="gallery__item">
                    <a class="gallery__link" href="${original}">
                        <img class="gallery__image" src="${preview}" alt="${description}" />
                    </a>
                  </div>
               `;
    })
    .join('');
}
new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
