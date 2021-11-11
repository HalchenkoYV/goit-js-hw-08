// "use strict"
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery')


function galleryBox(images) {
 return images
        .map(({ preview, original, description }) => {
        return `
    <li class="gallery__item">
    <a class="gallery__item" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        alt="${description}" />
    </a>
    </li>`
        })
        .join("");
}
function clickOnPic(evt) {
    if (!evt.target.classList.contains('gallery__image'))
        return;
    evt.preventDefault();
    
}
    

const texeOfPicture = galleryBox(galleryItems);
gallery.insertAdjacentHTML("beforeend", texeOfPicture);
gallery.addEventListener('click', clickOnPic);
var lightbox = new SimpleLightbox('.gallery a', { captionsData:'alt', captionDelay:250 });
