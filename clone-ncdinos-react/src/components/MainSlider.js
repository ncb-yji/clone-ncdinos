// 홈페이지 상단 메인배너 슬라이더
function mainSlider() {
  var main_swiper = new Swiper('.main-banner .slider', {
    loop: false,
    spaceBetween: 0,
    slidesPerView: 1,

    effect: 'fade',
    pagination: {
      el: '.main-banner .swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    autoplay: {
      delay: 4000,
    },
  });
}