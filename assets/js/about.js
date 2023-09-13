var aboutSwiper = new Swiper(".aboutSwiper", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 700,
  grabCursor: true,
  autoplay: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var aboutTeamSwiper = new Swiper(".aboutTeamSwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 2,
  loop: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});