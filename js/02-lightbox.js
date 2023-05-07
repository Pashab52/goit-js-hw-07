import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" 
      alt="${description}" />
   </a>
</li>`;
  })
  .join("");

const galleryList = document.querySelector(".gallery");

galleryList.innerHTML = galleryMarkup;

let gallery = new SimpleLightbox(".gallery a", {
  animationSpeed: 150,
  fadeSpeed: 150,
  animationSlide: false,
  showCounter: false,
  captionDelay: 250,
  captionsData: "alt",
});

console.log(gallery);
