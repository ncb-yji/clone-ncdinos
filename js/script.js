// 상단 로고옆 메뉴에 마우스 커서를 올리면 하위메뉴가 펼쳐짐
function header() {
  $('.menu-wrap').hover(function () {
    $('.header-wrap').addClass('hover');
  }, function () {
    $('.header-wrap').removeClass('hover');
  });
}

// '다이노스 포토'란 슬라이더
function newsSlider() {
  var news_swiper = new Swiper('.news .gall', {
    loop: false,
    spaceBetween: 10,
    slidesPerView: 4,
    slidesPerGroup: 1,
    navigation: {
      nextEl: '.news .ico.ico-next',
      prevEl: '.news .ico.ico-prev',
    },
    pagination: {
      el: '.news .swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    autoplay: {
      delay: 4000,
    },
  });
}
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

// 구단소식탭 (전체, 공지사항, 이벤트)
function tabContainer() {
  $('.tabs button, .tabs li').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    var index = $(this).index();
    var contWrap = $(this).parent('.tabs').siblings('.tab-container');
    contWrap.find('.cont').eq(index).addClass('active').siblings('.cont').removeClass('active');
  });

}

$(function () {
  // 메인 탭 (호버시 메뉴 표시)
  header();
  // 구단 소식 탭
  tabContainer();
  // 후원사 슬라이드
  logoSlider();
  // 메인 배너 슬라이드
  mainSlider();
  // 다이노스 포토
  newsSlider();
})