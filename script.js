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
   for (var i = 0; i < notifier.length; i++) {
    notifier[i].className = "";
  }
  notifier[0].className = "is-current";
}

function goToSlide(n) {
  slides[currentSlide].className = "evo_c-scrolling-carousel_item is-pre";
  notifier[slides.length-1-currentSlide].className = "";
   if (n >= 0) {
    notifier[slides.length-1-n].className = "is-current";
    if (n >= 1) {
      currentSlide = n;
      slides[currentSlide].className = "evo_c-scrolling-carousel_item";
    }

  }
}
fallBack.addEventListener('click', returnSlide, false);
next.addEventListener('click', nextSlide, false);
