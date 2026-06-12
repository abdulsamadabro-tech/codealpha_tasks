const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");

let currentIndex = 0;
let visibleImages = Array.from(images);

function openLightbox(img) {
  visibleImages = Array.from(document.querySelectorAll(".gallery img:not(.hide)"));
  currentIndex = visibleImages.indexOf(img);

  lightboxImg.src = img.src;
  lightbox.style.display = "flex";
}

function closeLightbox() {
  lightbox.style.display = "none";
}

function changeImage(direction) {
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = visibleImages.length - 1;
  }

  if (currentIndex >= visibleImages.length) {
    currentIndex = 0;
  }

  lightboxImg.src = visibleImages[currentIndex].src;
}

function filterImages(category, button) {
  const buttons = document.querySelectorAll(".filters button");

  buttons.forEach((btn) => {
    btn.classList.remove("active");
  });

  button.classList.add("active");

  images.forEach((img) => {
    if (category === "all" || img.dataset.category === category) {
      img.classList.remove("hide");
    } else {
      img.classList.add("hide");
    }
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeLightbox();
  }

  if (e.key === "ArrowRight") {
    changeImage(1);
  }

  if (e.key === "ArrowLeft") {
    changeImage(-1);
  }
});