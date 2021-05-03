$(document).ready(() => {
  $(".container_blur").hide();
  $(".operate").click(() => {
    $(".container_blur").show();
    $("body").css("overflow", "hidden");
  });
  $("#cloce_icon").click(() => {
    $("body").css("overflow", "scroll");
    $(".container_blur").hide();
  });
  /*click operate batting*/
  $(".batting").click(() => {
    window.open("./OperateBatting/batting.html", "_self");
  });
  /*click operate bowling*/
  $(".bowling").click(() => {
    window.open("./OperateBowling/firstInningsBowler.html", "_self");
  });
});
