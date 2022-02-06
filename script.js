// Carousel
// CAROUSEL
const slides = document.getElementsByClassName("carousel-item");
const prev = document.getElementById("btn-prev");
const next = document.getElementById("btn-next");
const carouselIndex = document.querySelectorAll(".dot");
const carousel = document.getElementById("carousel");
const dot = document.getElementById("0");

dot.addEventListener("click", () => console.log("DOT"));
console.log(dot);

let slidePosition = 2;
const totalSlides = slides.length;

function hideAllSlides() {
  for (let i = 0; i < totalSlides; i++) {
    slides[i].classList.remove("carousel-item-visible");
    //slides[i].classList.add("carousel-item-hidden");
    carouselIndex[i].classList.remove("active");
  }
}

const nextSlide = () => {
  hideAllSlides();
  if (slidePosition < totalSlides - 1) {
    ++slidePosition;
  } else {
    slidePosition = 0;
  }
  //slides[slidePosition].classList.remove("carousel-item-hidden");
  slides[slidePosition].classList.add("carousel-item-visible");
  carouselIndex[slidePosition].classList.add("active");
};

const prevSlide = () => {
  hideAllSlides();
  if (slidePosition > 0) {
    --slidePosition;
  } else {
    slidePosition = totalSlides - 1;
  }
  slides[slidePosition].classList.remove("carousel-item-hidden");
  slides[slidePosition].classList.add("carousel-item-visible");
  carouselIndex[slidePosition].classList.add("active");
};

carouselIndex[0].addEventListener("click", hideAllSlides);

prev.addEventListener("click", prevSlide);
next.addEventListener("click", nextSlide);


// Toggle Nav Menu
const toggleMenu = (toggleId, navId) => {
    const toggle_btn = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle_btn && nav) {
        toggle_btn.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
toggleMenu('menu_toggle_btn', 'nav__menu');

gsap.from('.left_container', {
    delay:2,
    duration:1.5,
    top:"100%",
    ease:"expo.inOut"
});

gsap.from('.right_container', {
    delay:2,
    duration:1.5,
    bottom:"100%",
    ease:"expo.inOut"
});

gsap.from('.logo', {
    opacity:0,
    delay:3.3,
    duration:2.5,
    y:-20,
    ease:"expo.inOut"
});

gsap.from('.nav__item', {
    opacity:0,
    delay:3.8,
    duration:3,
    y:-25,
    ease:"expo.Out",
    stagger:.2
});

gsap.from('.search_btn', {
    opacity:0,
    delay:4,
    duration:3,
    x:20,
    ease:"expo.Out"
});

gsap.from('.cart_btn', {
    opacity:0,
    delay:4,
    duration:3,
    x:20,
    ease:"expo.Out"
});

gsap.from('.social_item', {
    opacity:0,
    delay:4.5,
    duration:3,
    x:-25,
    ease:"expo.Out",
    stagger:.2
});

gsap.from('.direction_btn', {
    opacity:0,
    delay:4.4,
    x:-20,
    ease:"power3.Out",
    stagger:.2
});

gsap.from('.dot', {
    opacity:0,
    delay:4.4,
    x:-20,
    ease:"power3.Out",
    stagger:.2
});

gsap.from('.product_img', {
    opacity:0,
    delay: .5,
    duration:1.5,
    ease:"expo.inOut",
});

gsap.from('.product_title', {
    opacity:0,
    delay:5.4,
    duration:1.8,
    y:100,
    ease:"expo.inOut",
});

gsap.from('.product_type', {
    opacity:0,
    delay:5.8,
    duration:1.8,
    y:100,
    ease:"expo.inOut",
});

// Overlay start animation
gsap.to(".first", {
    delay: 0.5,
    duration: 1,
    right: "100%",
    ease: "expo.inOut"
  });
  gsap.to(".second", {
    delay: 0.5,
    duration: 1,
    left: "100%",
    ease: "expo.inOut"
  });
