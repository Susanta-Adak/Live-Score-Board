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

/* PREAVIEW SCORE second team*/
$(document).ready(() => {
  var i;
  var total = 0;
  var totalBall = 0;
  var totalExtra = 0;
  var wicket = 0;
  for (i = 0; i < localStorage.length; i++) {
    var keys = localStorage.key(i);
    if (keys.match("batting")) {
      var json_text = localStorage.getItem(keys);
      var json_extract = JSON.parse(json_text);

      var div1_r = $("<div class='table_column2'></div>").text(
        json_extract.Run
      );
      var div1_b = $("<div class='table_column2'></div>").text(
        json_extract.Ball
      );
      var div1_4s = $("<div class='table_column2'></div>").text(
        json_extract.NumberOf4s
      );
      var div1_6s = $("<div class='table_column2'></div>").text(
        json_extract.NumberOf6s
      );

      var div1_nm = $("<div class='table_column1'></div>").text(
        json_extract.Name
      );
      var div1_stat = $("<div class='score_headingid'></div>").append(
        div1_r,
        div1_b,
        div1_4s,
        div1_6s
      );

      var div1 = $("<div class='table_row'></div>").append(div1_nm, div1_stat);
      var div2 = $("<div class='hr_line_for_scoreboard'></div>").text("");

      $("#last_batting_score_tableid").append(div1, div2);

      total = total + json_extract.Run + json_extract.Extras;
      totalBall = totalBall + json_extract.Ball;
      totalExtra = totalExtra + json_extract.Extras;
      if (json_extract.Status !== "not out") {
        wicket = wicket + 1;
      }
    }
  }
  var extxt = $("<div class='text_e'></div>").text("Extras");
  var tottxt = $("<div class='txt_t'></div>").text("Total");
  var exval = $("<div class='val_e'></div>").text(totalExtra);
  var totval = $("<div class='val_t'></div>").text(total);

  var div1f = $("<div class='extra_run'></div>").append(extxt, exval);
  var div2f = $("<div class='hr_line_for_scoreboard'></div>").text("");
  var div3f = $("<div class='total_run'></div>").append(tottxt, totval);

  var footerScore = $("<div class='footer_r'></div>").append(
    div1f,
    div2f,
    div3f
  );
  $("#last_batting_score_tableid").append(footerScore);

  var ft_val = $("<div class='first_team_name'></div>").text(
    total +
      "/" +
      wicket +
      " (" +
      Math.floor(totalBall / 6) +
      "." +
      (totalBall % 6) +
      ")"
  );
  $("#team1_title").append(ft_val);
});

/* PREAVIEW SCORE first team*/
$(document).ready(() => {
  var i;
  var total = 0;
  var totalBall = 0;
  var totalExtra = 0;
  var wicket = 0;
  for (i = 0; i < localStorage.length; i++) {
    var keys = localStorage.key(i);
    if (keys.match("second")) {
      var json_text = localStorage.getItem(keys);
      var json_extract = JSON.parse(json_text);

      var div1_r = $("<div class='table_column2'></div>").text(
        json_extract.Run
      );
      var div1_b = $("<div class='table_column2'></div>").text(
        json_extract.Ball
      );
      var div1_4s = $("<div class='table_column2'></div>").text(
        json_extract.NumberOf4s
      );
      var div1_6s = $("<div class='table_column2'></div>").text(
        json_extract.NumberOf6s
      );

      var div1_nm = $("<div class='table_column1'></div>").text(
        json_extract.Name
      );
      var div1_stat = $("<div class='score_headingid'></div>").append(
        div1_r,
        div1_b,
        div1_4s,
        div1_6s
      );

      var div1 = $("<div class='table_row'></div>").append(div1_nm, div1_stat);
      var div2 = $("<div class='hr_line_for_scoreboard'></div>").text("");

      $("#first_batting_score_tableid").append(div1, div2);

      total = total + json_extract.Run + json_extract.Extras;
      totalBall = totalBall + json_extract.Ball;
      totalExtra = totalExtra + json_extract.Extras;
      if (json_extract.Status !== "not out") {
        wicket = wicket + 1;
      }
    }
  }
  var extxt = $("<div class='text_e'></div>").text("Extras");
  var tottxt = $("<div class='txt_t'></div>").text("Total");
  var exval = $("<div class='val_e'></div>").text(totalExtra);
  var totval = $("<div class='val_t'></div>").text(total);

  var div1f = $("<div class='extra_run'></div>").append(extxt, exval);
  var div2f = $("<div class='hr_line_for_scoreboard'></div>").text("");
  var div3f = $("<div class='total_run'></div>").append(tottxt, totval);

  var footerScore = $("<div class='footer_r'></div>").append(
    div1f,
    div2f,
    div3f
  );
  $("#first_batting_score_tableid").append(footerScore);

  var ft_val = $("<div class='first_team_name'></div>").text(
    total +
      "/" +
      wicket +
      " (" +
      Math.floor(totalBall / 6) +
      "." +
      (totalBall % 6) +
      ")"
  );
  $("#team2_title").append(ft_val);
});

/* PREAVIEW SCORE*/
$(document).ready(() => {
  var i;
  
  for (i = 0; i < localStorage.length; i++) {
    var keys = localStorage.key(i);
    if (keys.match("SeBowler")) {
      var json_text = localStorage.getItem(keys);
      var json_extract = JSON.parse(json_text);

      var div2_o = $("<div class='table_column2'></div>").text(
        Math.floor(json_extract.Ball/6)
      );
      var div2_m = $("<div class='table_column2'></div>").text(
        0
      );
      var div2_r = $("<div class='table_column2'></div>").text(
        json_extract.Run
      );
      var div2_w = $("<div class='table_column2'></div>").text(
        json_extract.Wicket
      );
      var div2_nb = $("<div class='table_column2'></div>").text(
          json_extract.NoBall
        );
      var div2_wd = $("<div class='table_column2'></div>").text(
      json_extract.WideBall
      );

      
      

      var div1 = $("<div class='table_column1'></div>").text(json_extract.Name);
      
      var div2 = $("<div class='score_headingid'></div>").append(
        div2_o,
        div2_m,
        div2_r,
        div2_w,
        div2_nb,
        div2_wd
      );
      
      var row = $("<div class='table_row'></div>").append(div1, div2);
      var line=$("<div class='hr_line_for_scoreboard'></div>").text("");
      $("#last_bowling_score_tableid").append(row,line);

      
    }
  }
  
});
/**PREVIEW SECOND BOWLING SCORE */
$(document).ready(() => {
  var i;
  
  for (i = 0; i < localStorage.length; i++) {
    var keys = localStorage.key(i);
    if (keys.match("firstBowler")) {
      var json_text = localStorage.getItem(keys);
      var json_extract = JSON.parse(json_text);

      var div2_o = $("<div class='table_column2'></div>").text(
        Math.floor(json_extract.Ball/6)
      );
      var div2_m = $("<div class='table_column2'></div>").text(
        0
      );
      var div2_r = $("<div class='table_column2'></div>").text(
        json_extract.Run
      );
      var div2_w = $("<div class='table_column2'></div>").text(
        json_extract.Wicket
      );
      var div2_nb = $("<div class='table_column2'></div>").text(
          json_extract.NoBall
        );
      var div2_wd = $("<div class='table_column2'></div>").text(
      json_extract.WideBall
      );

      
      

      var div1 = $("<div class='table_column1'></div>").text(json_extract.Name);
      
      var div2 = $("<div class='score_headingid'></div>").append(
        div2_o,
        div2_m,
        div2_r,
        div2_w,
        div2_nb,
        div2_wd
      );
      
      var row = $("<div class='table_row'></div>").append(div1, div2);
      var line=$("<div class='hr_line_for_scoreboard'></div>").text("");
      $("#first_bowling_score_tableid").append(row,line);

      
    }
  }
  
});

