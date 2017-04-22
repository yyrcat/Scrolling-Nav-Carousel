var controls = document.querySelectorAll('.evo_c-scrolling-carousel_controller'),
  slides = document.querySelectorAll(".evo_c-scrolling-carousel_item"),
  currentSlide = slides.length - 1,
  next = document.querySelector(".evo_c-scrolling-carousel_controller--next"),
  fallBack = document.querySelector(".evo_c-scrolling-carousel_controller--return"),
  notifier = document.querySelectorAll('.evo_c-scrolling-carousel_notifier li');

function nextSlide() {
  goToSlide(currentSlide - 1);
}

function returnSlide() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].className = "evo_c-scrolling-carousel_item";
  }
  currentSlide = slides.length - 1;
  notifier[currentSlide].className = "is-current";
}

function goToSlide(n) {
  slides[currentSlide].className = "evo_c-scrolling-carousel_item is-pre";
  notifier[currentSlide].className = "";
  if (n >= 1) {
    currentSlide = n;
    slides[currentSlide].className = "evo_c-scrolling-carousel_item";
    notifier[currentSlide].className = "is-current";
  }
}
fallBack.addEventListener('click', returnSlide, false);
next.addEventListener('click', nextSlide, false);
