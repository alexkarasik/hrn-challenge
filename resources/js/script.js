// $(".button").click(function() {
//   $('.content').slideToggle().toggleClass('active');
//   if ($('.content').hasClass('active')) {
//     $('.header span').text('Collapse');
//   } else {
//     $('.header span').text('Expand');
//   }
// });
// $('button').click(function(){
// 	$(".header").trigger('click');
// })


$(document).ready(function() {
  $(".btnExpand").on('click', function() {
    if ($(".boxes .content").is(':visible')) {
      $(".boxes .content").hide();
    } else {
      $(".boxes .content").show();
    }
  });
});
