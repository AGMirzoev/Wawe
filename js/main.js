// Nav icon
const navBtn = document.querySelector(".nav-icon-btn");
const navIcon = document.querySelector(".nav-icon");
const nav = document.querySelector(".header__top");

navBtn.onclick = function () {
  navIcon.classList.toggle("nav-icon--active");
  nav.classList.toggle("header__top-mobile");
  document.body.classList.toggle("no-scroll");
};

// Gallery
const list = document.querySelector(".gallery__list");
const items = document.querySelectorAll(".gallery__block");
const listItems = document.querySelectorAll(".galerry__item");

function filter() {
  list.addEventListener("click", (event) => {
    const targetId = event.target.dataset.id;
    const target = event.target;

    if (target.classList.contains("galerry__item")) {
      listItems.forEach((listItem) => listItem.classList.remove("active"));
      target.classList.add("active");
    }

    switch (targetId) {
      case "all":
        getItems("gallery__block");
        break;
      case "tourists":
      case "nature":
      case "prof":
        getItems(targetId);
        break;
    }
  });
}
filter();

function getItems(className) {
  items.forEach((item) => {
    if (item.classList.contains(className)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

// Кнопка Показать еще
const btn = document.querySelector(".show-more");
const cards = document.querySelectorAll(".gallery__block");

btn.addEventListener("click", function () {
  for (let card of cards) {
    card.style.display = "grid";
  }

  btn.style.display = "none";
});

// SwiperSlider
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  slidesPerView: 1,
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },
});

// Modile
const inputs = document.querySelectorAll('input[type="tel"]');
const im = new Inputmask("+7 (999) 999-99-99");
im.mask(inputs);
