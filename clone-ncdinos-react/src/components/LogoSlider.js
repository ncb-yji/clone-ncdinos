// 홈페이지 하단 후원사 슬라이더
function logoSlider() {
  var logo_swiper = new Swiper('.partner .slider', {
    speed: 500,
    loop: true,
    slidesPerView: 5,
    slidesPerGroup: 1,
    navigation: {
      nextEl: '.partner .ico.ico-next',
      prevEl: '.partner .ico.ico-prev',
    },
    autoplay: {
      delay: 2000,
    },
  });
}