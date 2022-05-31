const sliderImgs = document.querySelectorAll(".slider__img");
const sliderText = document.querySelectorAll(".slider__text");
const btnRight = document.querySelector(".slider__btn-right");
const btnLeft = document.querySelector(".slider__btn-left");

const nextSlide = () => {
  const SlideImg = document.querySelector(".slider__img-active");

  const SlideText = document.querySelector(".slider__text-active");
  SlideText.classList.remove("slider__text-active");

  SlideImg.classList.remove("slider__img-active");

  if (
    SlideImg.nextElementSibling &&
    SlideImg.nextElementSibling.classList.contains("slider__img")
  ) {
    SlideImg.nextElementSibling.classList.add("slider__img-active");
    SlideText.nextElementSibling.classList.add("slider__text-active");
  } else {
    sliderImgs[0].classList.add("slider__img-active");
    sliderText[0].classList.add("slider__text-active");
  }
};
const prevSlide = () => {
  const SlideImg = document.querySelector(".slider__img-active");

  const SlideText = document.querySelector(".slider__text-active");
  SlideText.classList.remove("slider__text-active");

  SlideImg.classList.remove("slider__img-active");

  if (
    SlideImg.previousElementSibling &&
    SlideImg.previousElementSibling.classList.contains("slider__img")
  ) {
    SlideImg.previousElementSibling.classList.add("slider__img-active");
    SlideText.previousElementSibling.classList.add("slider__text-active");
  } else {
    sliderImgs[sliderImgs.length - 1].classList.add("slider__img-active");
    sliderText[sliderText.length - 1].classList.add("slider__text-active");
  }
};

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);

const openNav = document.querySelector(".nav__open-btn");
const closeNav = document.querySelector(".nav__close-btn");
const list = document.querySelector(".nav__list-container");

openNav.addEventListener("click", () => {
  list.classList.add("open");
  document.body.classList.add("dark");
});
closeNav.addEventListener("click", () => {
  list.classList.remove("open");
  document.body.classList.remove("dark");
});
