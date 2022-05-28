const imageSlider = document.querySelectorAll(".slider__img--active");
const textSlider = document.querySelectorAll(".slider__text-container");
const btnRight = document.querySelector(".slider__arrow--right");
const btnLeft = document.querySelector(".slider__arrow--left");

const nextSlider = () => {
  let chargeImageSlider = document.querySelector(".slider__img--active");

  let chargeTextSlider = document.querySelector(".slider__text-active");

  chargeImageSlider.classList.remove(".slider__img--active");
  chargeTextSlider.classList.remove(".slider__text-active");
};
