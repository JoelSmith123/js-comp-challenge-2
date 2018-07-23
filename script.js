// $('.arrow-icon').hover(function() {
//   $('img').removeAttr('src');
//   $('img').attr("src", 'images/forward-arrow-2.svg')
// });

$('.arrow-icon').mouseover(function(e) {
  $(e.target).removeAttr('src');
  $(e.target).attr('src', 'images/forward-arrow-2.svg')
})

$('.arrow-icon').mouseout(function(e) {
  $(e.target).removeAttr('src');
  $(e.target).attr('src', 'images/forward-arrow.svg');
})
