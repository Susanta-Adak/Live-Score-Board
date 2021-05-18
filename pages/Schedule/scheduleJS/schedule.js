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

/**ADMIN LOGIN */
$(document).ready(()=>{
    
  $("#admin_login_btn").click(()=>{
      $("#login_div_section").show();
      $("body").css("overflow","hidden");
  });
  $("#cloce_icon").click(()=>{
      $("#login_div_section").hide();
      $("body").css("overflow","scroll");
  });
  /*CHECK USER AND PASSWORD*/
  $("#loginUser").click(()=>{
      if($("#login_username").val()=="susanta"){
          if($("#login_pass").val()=="123"){
              
              var user=$("#login_username").val();
              sessionStorage.setItem("user_email",user);
              window.open('../Admin/adminhome.html','_self');
              return false;
          }
          else{
              $("#alert_user2").show();
              setInterval(()=>{
                  $("#alert_user2").hide();
              },3000);
          }
      }
      else{
          $("#alert_user1").show();
          setInterval(()=>{
              $("#alert_user1").hide();
          },3000);
      }
  });
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
      "background":"rgba(86, 86, 86, 0.3)",
      "backdrop-filter":"blur(10px)",
      "color":"#fff"
    });
    $("#btn3").css({
      "background":"rgba(86, 86, 86, 0.3)",
      "backdrop-filter":"blur(10px)",
      "color":"#fff"
    });
    $("#btn5").css({
      "background":"rgba(86, 86, 86, 0.3)",
      "backdrop-filter":"blur(10px)",
      "color":"#fff"
    });
    $("#btn4").css({
      "background":"rgba(86, 86, 86, 0.3)",
      "backdrop-filter":"blur(10px)",
      "color":"#fff"
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
      "background":"rgba(86, 86, 86, 0.3)",
      "backdrop-filter":"blur(10px)",
      "color":"#fff"
    });
    $("#btn3").css({
      "background":"rgba(86, 86, 86, 0.3)",
      "backdrop-filter":"blur(10px)",
      "color":"#fff"
    });
    $("#btn5").css({
      "background":"rgba(86, 86, 86, 0.3)",
      "backdrop-filter":"blur(10px)",
      "color":"#fff"
    });
    $("#btn4").css({
      "background":"rgba(86, 86, 86, 0.3)",
      "backdrop-filter":"blur(10px)",
      "color":"#fff"
    });
  });
  
  $("#btn3").click(()=>{
    $("#domestic_schedule").hide();
    $("#inter_schedule").hide();
    $("#women_schedule").hide();
    $("#all_schedule").hide();
    $("#t20_schedule").show();
    $("#btn1").css({
      "background":"rgba(86, 86, 86, 0.3)",
      "backdrop-filter":"blur(10px)",
      "color":"#fff"
    });
    $("#btn2").css({
      "background":"rgba(86, 86, 86, 0.3)",
      "backdrop-filter":"blur(10px)",
      "color":"#fff"
    });
    $("#btn3").css({
      "background-color":"rgb(0, 94, 0)",
      "color":"white"
    });
    $("#btn5").css({
      "background":"rgba(86, 86, 86, 0.3)",
      "backdrop-filter":"blur(10px)",
      "color":"#fff"
    });
    $("#btn4").css({
      "background":"rgba(86, 86, 86, 0.3)",
      "backdrop-filter":"blur(10px)",
      "color":"#fff"
    });
  });

  $("#btn4").click(()=>{
    $("#domestic_schedule").hide();
    $("#inter_schedule").hide();
    $("#t20_schedule").hide();
    $("#all_schedule").hide();
    $("#women_schedule").show();
    $("#btn1").css({
      "background":"rgba(86, 86, 86, 0.3)",
      "backdrop-filter":"blur(10px)",
      "color":"#fff"
    });
    $("#btn2").css({
      "background":"rgba(86, 86, 86, 0.3)",
      "backdrop-filter":"blur(10px)",
      "color":"#fff"
    });
    $("#btn3").css({
      "background":"rgba(86, 86, 86, 0.3)",
      "backdrop-filter":"blur(10px)",
      "color":"#fff"
    });
    $("#btn5").css({
      "background":"rgba(86, 86, 86, 0.3)",
      "backdrop-filter":"blur(10px)",
      "color":"#fff"
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
      "background":"rgba(86, 86, 86, 0.3)",
      "backdrop-filter":"blur(10px)",
      "color":"#fff"
    });
    $("#btn2").css({
      "background":"rgba(86, 86, 86, 0.3)",
      "backdrop-filter":"blur(10px)",
      "color":"#fff"
    });
    $("#btn3").css({
      "background":"rgba(86, 86, 86, 0.3)",
      "backdrop-filter":"blur(10px)",
      "color":"#fff"
    });
    $("#btn4").css({
      "background":"rgba(86, 86, 86, 0.3)",
      "backdrop-filter":"blur(10px)",
      "color":"#fff"
    });
    $("#btn5").css({
      "background-color":"rgb(0, 94, 0)",
      "color":"white"
    });
  });
});