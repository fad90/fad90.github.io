let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

let slides = document.querySelectorAll(".slider li");
let dots = document.querySelectorAll(".photo_dot");

let index = 0;

let activeSlide = function (n) {
  for (slide of slides) {
    slide.classList.remove("active");
  }
  slides[n].classList.add("active");
};

let activeDot = function (n) {
  for (dot of dots) {
    dot.classList.remove("active");
  }
  dots[n].classList.add("active");
};

let prepareCurrentSlide = function (index) {
  activeSlide(index);
  activeDot(index);
};

let nextSlide = function () {
  if (index == slides.length - 1) {
    index = 0;
    prepareCurrentSlide(index);
  } else {
    index++;
    prepareCurrentSlide(index);
  }
};

let prevSlide = function () {
  if (index == 0) {
    index = slides.length - 1;
    prepareCurrentSlide(index);
  } else {
    index--;
    prepareCurrentSlide(index);
  }
};

dots.forEach((item, indexDot) => {
  item.addEventListener("click", () => {
    index = indexDot;
    prepareCurrentSlide(index);
  });
});

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);