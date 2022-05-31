const sliderImgs = document.querySelectorAll(".slider__img");
const sliderText = document.querySelectorAll(".slider__text-container");
const btnRight = document.querySelector(".slider__btn-right");
const btnLeft = document.querySelector(".slider__btn-left");

const nextSlider = () => {
  const activeImg = document.querySelector(".slider__img-active");
  const activeText = document.querySelector(".slider__text-active");

  activeImg.classList.remove("slider__img-active");
  activeText.classList.remove("slider__text-active");

  if (
    activeImg.nextElementSibling &&
    activeImg.nextElementSibling.classList.contains("slider__img")
  ) {
    activeImg.classList.add("slider__img-active");
    activeText.classList.add("slider__text-active");
  } else {
    sliderImgs[0].classList.add("slider__img-active");
    sliderText[0].classList.add("slider__text-active");
  }
};

const preSlider = () => {
  const activeImg = document.querySelector(".slider__img-active");
  const activeText = document.querySelector(".slider__text-active");

  activeImg.classList.remove("slider__img-active");
  activeText.classList.remove("slider__text-active");

  if (
    activeImg.previousElementSibling &&
    activeImg.previousElementSibling.classList.contains("slider__img-active")
  ) {
    activeImg.classList.add("slider__img-active");
    activeText.classList.add("slider__text-active");
  } else {
    sliderImgs[sliderImgs.length - 1].previousElementSibling.classList.add(
      "slider__img-active"
    );
    sliderText[sliderText.length - 1].previousElementSibling.classList.add(
      "slider__text-active"
    );
  }
};

btnRight.addEventListener("click", nextSlider);
btnLeft.addEventListener("click", preSlider);

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
