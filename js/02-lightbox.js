import { galleryItems } from './gallery-items.js';
// Change code below this line

const imgGalleryMarkup = galleryItems.map(({preview,original,description})=>{
    return  `
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
      `
  }).join('');
  
  
  const galleryRef = document.querySelector('.gallery');
  
  galleryRef.insertAdjacentHTML('beforeend', imgGalleryMarkup);
  

galleryRef.addEventListener('click', (evt)=>{
    evt.preventDefault();
    let lightbox = new SimpleLightbox('.gallery a', { scrollZoom:false,captionDelay:250, captionsData:'alt',doubleTapZoom:1});
   
})

