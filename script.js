(function() {
var controls = document.querySelectorAll('.evo_c-scrolling-carousel_controller');
var slides = document.querySelectorAll(".evo_c-scrolling-carousel_item");
  var slideContainer = document.querySelector('.evo_c-scrolling-nav-carousel');
  var currentSlide = slides.length - 1;
  var notifier = document.querySelectorAll('.evo_c-scrolling-carousel_notifier li');

slideContainer.addEventListener("wheel", controlSlider);

function controlSlider(e) {
  var e = window.event || e;
  var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
  if (delta > 0) {
  	returnSlide();
  } else {
     goToSlide(currentSlide - 1);
  }
}


/*window.onscroll = function() {
  controlSlide(slideContainer);
};

function controlSlide(el) {
  var yPos = 0,
    elHeight = el.clientHeight;
  while (el) {
    if (el.tagName == "BODY") {
      var yScroll = el.scrollTop || document.documentElement.scrollTop;

      yPos += (el.offsetTop - yScroll + el.clientTop);
    } else {
      yPos += (el.offsetTop - el.scrollTop + el.clientTop);
    }

    el = el.offsetParent;
  }
  if (yScroll - yPos > elHeight) {
    goToSlide(currentSlide - 1);
  } else {
    returnSlide();
  }
}
*/


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
})();
