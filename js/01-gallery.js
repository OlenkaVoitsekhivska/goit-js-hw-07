import { galleryItems } from './gallery-items.js';

// Change code below this line
const imgGalleryMarkup = galleryItems.map(({preview,original,description})=>{
  return  `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `
}).join('');


const galleryRef = document.querySelector('.gallery');

galleryRef.insertAdjacentHTML('beforeend', imgGalleryMarkup);




galleryRef.addEventListener('click', (evt)=>{
    evt.preventDefault();
    if(evt.target.classList.contains("gallery__image")){
openImgModal(evt);
    }
})


function openImgModal(evt){
const modal = basicLightbox.create(`<img width="1400" height="900" src= "${evt.target.dataset.source}"></img>`);
modal.show();


 document.addEventListener('keydown', (evt)=>{
    if(evt.code==="Escape"){
   modal.close();
    }
    })

}
