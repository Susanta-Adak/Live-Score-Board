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

/**HEADER BUTTON SECTION */
$(document).ready(()=>{
  $("#domestic_schedule").hide();
  $("#t20_schedule").hide();
  $("#women_schedule").hide();
  $("#all_schedule").hide();
  $("#btn1").css({
    "background-color":"rgb(0, 94, 0)",
    "color":"white"
  });
  $("#btn1").click(()=>{
    $("#domestic_schedule").hide();
    $("#inter_schedule").show();
    $("#women_schedule").hide();
    $("#all_schedule").hide();
    $("#t20_schedule").hide();
    $("#btn1").css({
      "background-color":"rgb(0, 94, 0)",
      "color":"white"
    });
    $("#btn2").css({
      "background-color":"#fff",
      "color":"black"
    });
    $("#btn3").css({
      "background-color":"#fff",
      "color":"black"
    });
    $("#btn5").css({
      "background-color":"#fff",
      "color":"black"
    });
    $("#btn4").css({
      "background-color":"#fff",
      "color":"black"
    });
  });

  $("#btn2").click(()=>{
    $("#domestic_schedule").show();
    $("#inter_schedule").hide();
    $("#women_schedule").hide();
    $("#all_schedule").hide();
    $("#t20_schedule").hide();
    $("#btn2").css({
      "background-color":"rgb(0, 94, 0)",
      "color":"white"
    });
    $("#btn1").css({
      "background-color":"#fff",
      "color":"black"
    });
    $("#btn3").css({
      "background-color":"#fff",
      "color":"black"
    });
    $("#btn5").css({
      "background-color":"#fff",
      "color":"black"
    });
    $("#btn4").css({
      "background-color":"#fff",
      "color":"black"
    });
  });
  
  $("#btn3").click(()=>{
    $("#domestic_schedule").hide();
    $("#inter_schedule").hide();
    $("#women_schedule").hide();
    $("#all_schedule").hide();
    $("#t20_schedule").show();
    $("#btn1").css({
      "background-color":"#fff",
      "color":"black"
    });
    $("#btn2").css({
      "background-color":"#fff",
      "color":"black"
    });
    $("#btn3").css({
      "background-color":"rgb(0, 94, 0)",
      "color":"white"
    });
    $("#btn5").css({
      "background-color":"#fff",
      "color":"black"
    });
    $("#btn4").css({
      "background-color":"#fff",
      "color":"black"
    });
  });

  $("#btn4").click(()=>{
    $("#domestic_schedule").hide();
    $("#inter_schedule").hide();
    $("#t20_schedule").hide();
    $("#all_schedule").hide();
    $("#women_schedule").show();
    $("#btn1").css({
      "background-color":"#fff",
      "color":"black"
    });
    $("#btn2").css({
      "background-color":"#fff",
      "color":"black"
    });
    $("#btn3").css({
      "background-color":"#fff",
      "color":"black"
    });
    $("#btn5").css({
      "background-color":"#fff",
      "color":"black"
    });
    $("#btn4").css({
      "background-color":"rgb(0, 94, 0)",
      "color":"white"
    });
  });

  $("#btn5").click(()=>{
    $("#domestic_schedule").hide();
    $("#inter_schedule").hide();
    $("#t20_schedule").hide();
    $("#women_schedule").hide();
    $("#all_schedule").show();
    $("#btn1").css({
      "background-color":"#fff",
      "color":"black"
    });
    $("#btn2").css({
      "background-color":"#fff",
      "color":"black"
    });
    $("#btn3").css({
      "background-color":"#fff",
      "color":"black"
    });
    $("#btn4").css({
      "background-color":"#fff",
      "color":"black"
    });
    $("#btn5").css({
      "background-color":"rgb(0, 94, 0)",
      "color":"white"
    });
  });
});