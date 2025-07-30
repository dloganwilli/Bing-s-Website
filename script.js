const swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
      delay: 5000, // slower autoplay (5 seconds)
      disableOnInteraction: false
    },
    effect: 'fade',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
  