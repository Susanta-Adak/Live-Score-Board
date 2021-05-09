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