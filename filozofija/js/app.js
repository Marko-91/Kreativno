$(window).on('resize', function () {
  var win = $(this);
  if (win.width() < 992) {

    $('#nav-bar').addClass('col-10');

  } else {
    $('#nav-bar').removeClass('col-10');

  }
});

let flip = 0;
// logika filozofija lekcije

$("#title-1").click(function () {
  $("#less-1").toggle("slow");
  $("#less-2").toggle("slow");
});
$("#title-2").click(function () {
  $("#less-3").toggle("slow");
  $("#less-4").toggle("slow");
});
$("#title-3").click(function () {
  $("#less-5").toggle("slow");
  $("#less-6").toggle("slow");
});
$("#title-4").click(function () {
  $("#less-7").toggle("slow");
  $("#less-8").toggle("slow");
});
$("#title-5").click(function () {
  $("#less-9").toggle("slow");
  $("#less-10").toggle("slow");
});
$("#title-6").click(function () {
  $("#less-11").toggle("slow");
  $("#less-12").toggle("slow");
});
$("#title-7").click(function () {
  $("#less-13").toggle("slow");
  $("#less-14").toggle("slow");
});
$("#title-8").click(function () {
  $("#less-15").toggle("slow");
  $("#less-16").toggle("slow");
});
$("#title-9").click(function () {
  $("#less-17").toggle("slow");
  $("#less-18").toggle("slow");
});
$("#title-10").click(function () {
  $("#less-19").toggle("slow");
  $("#less-20").toggle("slow");
});