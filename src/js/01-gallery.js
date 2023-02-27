import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from "./gallery-items";

const containerForImages = document.querySelector(".gallery");

const createGalleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
</a>`
  )
  .join("");

containerForImages.insertAdjacentHTML("beforeend", createGalleryMarkup);
var lightbox = new SimpleLightbox(".gallery a", { captionDelay: 250 });

console.log('hello');