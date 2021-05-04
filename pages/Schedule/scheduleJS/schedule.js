// import "index.css";
$(".navTrigger").click(function () {
  $(this).toggleClass("active");
  console.log("Clicked menu");
  $("#mainListDiv").toggleClass("show_list");
  $("#mainListDiv").fadeIn();
});
$("#team_name_label1").click(function () {
  $(this).addClass("team_name_label");
  $("#team_name_label2").removeClass("team_name_label");
  $("#score_table_for_firstteam").show();
  $("#score_table_for_lastteam").hide();
});
$("#team_name_label2").click(function () {
  $(this).addClass("team_name_label");
  $("#team_name_label1").removeClass("team_name_label");
  $("#score_table_for_lastteam").show();
  $("#score_table_for_firstteam").hide();
});
