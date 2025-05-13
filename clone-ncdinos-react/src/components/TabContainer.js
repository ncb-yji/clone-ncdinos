// 구단소식탭 (전체, 공지사항, 이벤트)
function TabContainer() {
  $('.tabs button, .tabs li').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    var index = $(this).index();
    var contWrap = $(this).parent('.tabs').siblings('.tab-container');
    contWrap.find('.cont').eq(index).addClass('active').siblings('.cont').removeClass('active');
  });

}