$(document).ready(function() {
    // Swiper: Slider
        var swiper = new Swiper('.swiper-container', {
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
          slidesPerView: 'auto',
          coverflowEffect: {
            rotate: 30,
            stretch: 50,
            depth: 200,
            modifier: 1,
            slideShadows : false,
          },
        });
    });