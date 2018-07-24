$('.arrow-icon').mouseover(function(e) {
  $(e.target).removeAttr('src');
  $(e.target).attr('src', 'images/forward-arrow-2.svg')
})

$('.arrow-icon').mouseout(function(e) {
  $(e.target).removeAttr('src');
  $(e.target).attr('src', 'images/forward-arrow.svg');
})

$('.home-link, .bottom-page-link').click(function () {
  $("html, body").animate({scrollTop: 0}, 1000);
})