let swiper = new Swiper(".mySwiper", {
  // DOTS
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // PAGINATION CUB



//  


// *********Scroll vertical **********************//

//   direction: "vertical",
//  pagination: {
//    el: ".swiper-pagination",
//    clickable: true,
//    hide: true,
//  },

//********************************************* */
  // prev next buttons
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // brekpoint

  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  },

  // autoply
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  // scroll bar
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
  
});