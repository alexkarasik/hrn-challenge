$(document).ready(function() {
  $(".btnExpand").on('click', function() {
    if ($(".boxes .content").is(':visible')) {
      $(".boxes .content").hide();
        $(".btnExpand").text("Compare Benefits");
    } else {
      $(".boxes .content").show();
        $(".btnExpand").text("Close");
    }
  });
});
