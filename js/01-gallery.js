import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
  })
  .join("");

const galleryList = document.querySelector(".gallery");

galleryList.innerHTML = galleryMarkup;

// galleryList.insertAdjacentHTML("beforeend", galleryMarkup);

galleryList.addEventListener("click", hanlerImgClick);

function hanlerImgClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  console.log(event.target);
  const instance = basicLightbox.create(
    `
    <div class="modal">
        <img src="${event.target.dataset.source}" >
    </div>
`,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", handlerEsc);
      },
      onClose: (instance) => {
        document.removeEventListener("keydown", handlerEsc);
      },
    }
  );

  //   instance.show(() => {
  //     const modal = document.querySelector(".modal");
  //     modal.addEventListener("click", () => instance.close());
  //   });

  instance.show();

  const modal = document.querySelector(".modal");

  modal.addEventListener("click", () => instance.close());

  function handlerEsc(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}
