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

// function buttonText() {
//   let change = document.getElementById("btnExpand");
//   if (change.innerHTML == "Compare Benefits") {
//     change.innerHTML = "Close";
//   } else {
//     change.innerHTML = "Compare Benefits";
//   }
// }

$(document).ready(function(){
  $(".btnExpand").click(function(){
    $(".content").show();
  });
  $(".btnExpand").click(function(){
    $(".content").hide();
  });
});
