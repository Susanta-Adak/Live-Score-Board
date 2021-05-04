/* profile photo in navebar*/
function show_profile_nave() {
  var email = sessionStorage.getItem("user_email");
  if (localStorage.getItem(email + "user_profileimage") != null) {
    var pic_box = document.getElementById("profile_photo");
    var imageurl = localStorage.getItem(email + "user_profileimage");
    pic_box.style.background = "url(" + imageurl + ")";
    pic_box.style.backgroundRepeat = "no-repeat";
    pic_box.style.backgroundSize = "cover";
    document.getElementById("upload_icon").style.display = "none";
  }
}
show_profile_nave();

function show_profile_p() {
  var email = sessionStorage.getItem("user_email");
  if (localStorage.getItem(email + "user_profileimage") != null) {
    var pic_box = document.getElementById("profile_photo_forsidebar");
    var imageurl = localStorage.getItem(email + "user_profileimage");
    pic_box.style.background = "url(" + imageurl + ")";
    pic_box.style.backgroundRepeat = "no-repeat";
    pic_box.style.backgroundSize = "cover";
    document.getElementById("upload_icon").style.display = "none";
  }
}
show_profile_p();
function upload_pic() {
  var input = document.getElementById("file_name");
  var freader = new FileReader();
  freader.readAsDataURL(input.files[0]);
  freader.onloadend = function (event) {
    var show = document.getElementById("profile_photo_forsidebar");
    var image_url = event.target.result;
    show.style.background = "url(" + event.target.result + ")";
    show.style.backgroundRepeat = "no-repeat";
    show.style.backgroundSize = "cover";
    document.getElementById("upload_icon").style.display = "none";

    localStorage.setItem(
      sessionStorage.getItem("user_email") + "user_profileimage",
      image_url
    );
    document.getElementById("mainpage").style.display = "none";

    window.location = location.href;
  };
}

// dropdown manu
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

/*ADD SCORE IN LOCAL STORAGE*/
$(document).ready(() => {
  $("#add").click(() => {
    var name = $("#batting_name").val();
    var numberOf4s = parseInt($("#count_4s").val());
    var numberOf6s = parseInt($("#count_6s").val());
    var otherRun = parseInt($("#other_run").val());
    var status = $("#status").val();
    var extraRun = parseInt($("#extrarun").val());

    if (localStorage.getItem(name + "batting") != null) {
      var json_text = localStorage.getItem(name + "batting");
      var json_extract = JSON.parse(json_text);
      var run = json_extract.Run + numberOf4s * 4 + numberOf6s * 6 + otherRun;
      var ball = json_extract.Ball + 1;
      var numberOf4s = json_extract.NumberOf4s + numberOf4s;
      var numberOf6s = json_extract.NumberOf6s + numberOf6s;
      var addDetails = {
        Name: name,
        NumberOf4s: numberOf4s,
        NumberOf6s: numberOf6s,
        OtherRun: otherRun,
        Status: status,
        Extras: extraRun,
        Run: run,
        Ball: ball,
      };
      var addDetails_data = JSON.stringify(addDetails);
      localStorage.setItem(name + "batting", addDetails_data);
    } else {
      var run = numberOf4s * 4 + numberOf6s * 6 + otherRun;
      var ball = 1;

      var addDetails = {
        Name: name,
        NumberOf4s: numberOf4s,
        NumberOf6s: numberOf6s,
        OtherRun: otherRun,
        Status: status,
        Extras: extraRun,
        Run: run,
        Ball: ball,
      };
      var addDetails_data = JSON.stringify(addDetails);
      localStorage.setItem(name + "batting", addDetails_data);
    }

    window.location = location.href;
  });
});
/* PREAVIEW SCORE*/
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

      var div2_r = $("<div class='table_column2'></div>").text(
        json_extract.Run
      );
      var div2_b = $("<div class='table_column2'></div>").text(
        json_extract.Ball
      );
      var div2_4s = $("<div class='table_column2'></div>").text(
        json_extract.NumberOf4s
      );
      var div2_6s = $("<div class='table_column2'></div>").text(
        json_extract.NumberOf6s
      );

      var div1_nm = $("<p class='p_nm'></p>").text(json_extract.Name);
      var div1_stat = $("<p class='p_status'></p>").text(json_extract.Status);

      var div1 = $("<div class='table_column1'></div>").append(
        div1_nm,
        div1_stat
      );
      var div2 = $("<div class='score_headingid'></div>").append(
        div2_r,
        div2_b,
        div2_4s,
        div2_6s
      );
      var div3 = $(
        "<div style='width: 93%; height: 2px;border: 1px solid #fff;background-color: gray;'></div>"
      ).text();
      var row = $("<div class='table_row'></div>").append(div1, div2, div3);
      var scorePreviewSection = $(".first_team_score_preview").append(row);

      total = total + json_extract.Run + json_extract.Extras;
      totalBall = totalBall + json_extract.Ball;
      totalExtra = totalExtra + json_extract.Extras;
    }
  }
  var name1 = $("<p class='name_txt'></p>").text("Extras");
  var name2 = $("<p class='name_txt'></p>").text("Total");

  var val1 = $("<p class='value_txt'></p>").text(totalExtra);
  var val2 = $("<p class='value_txt'></p>").text(total);
  var div4 = $("<div class='hr_line_for_scoreboard'></div>").text();

  var footerSection1 = $("<div class='footer_score'></div>").append(
    name1,
    val1
  );
  var footerSection2 = $("<div class='footer_score'></div>").append(
    div4,
    name2,
    val2
  );

  var total_rn = $("<p class='run_footer_prev'></p>").text(
    total + "/" + wicket + " (0." + totalBall + ")"
  );
  var footerScore = $("<div class='footer_score'></div>").append(total_rn);
  var scorePreviewSection = $(".first_team_score_preview").append(
    footerSection1,
    footerSection2,
    footerScore
  );
});

$(document).ready(() => {
  $("#first_ing").click(() => {
    window.open("batting.html", "_self");
  });
  $("#second_ing").click(() => {
    window.open("battingSecondInnings.html", "_self");
  });
});
  /*THIS IS FOR FIRST INNINGS*/
  $(document).ready(() => {
    $("#add1").click(() => {
      var name = $("#batting_name1").val();
      var noball = parseInt($("#noball").val());
      var wideball = parseInt($("#wideball").val());
      var wicket = parseInt($("#wicket").val());
      var numberOf4s = parseInt($("#count_4s1").val());
      var numberOf6s = parseInt($("#count_6s1").val());
      var otherRun = parseInt($("#other_run1").val());
     
      

      if (localStorage.getItem(name + "firstBowler") != null) {
        var json_text = localStorage.getItem(name + "firstBowler");
        var json_extract = JSON.parse(json_text);
        var run = json_extract.Run+ numberOf4s * 4 + numberOf6s * 6 + otherRun+noball+wideball;
        
        var ball=json_extract.Ball;
        if(noball==0 && wideball==0){
            ball = ball + 1;
        }
        var wicket=wicket+json_extract.Wicket;
        
        var numberOf4s = json_extract.NumberOf4s + numberOf4s;
        var numberOf6s = json_extract.NumberOf6s + numberOf6s;
        var noball=json_extract.NoBall+noball;
        var wideball=json_extract.WideBall+wideball;
        
        var addDetails = {
            Name: name,
            NoBall:noball,
            WideBall:wideball,
            NumberOf4s: numberOf4s,
            NumberOf6s: numberOf6s,
            OtherRun: otherRun,
            Run: run,
            Ball: ball,
            Wicket:wicket
        };
        var addDetails_data = JSON.stringify(addDetails);
        localStorage.setItem(name + "firstBowler", addDetails_data);
      } else {
        var run = numberOf4s * 4 + numberOf6s * 6 + otherRun+noball+wideball;
        var ball=0;
        if(noball==0 && wideball==0){
            ball=1;
        }
        

        var addDetails = {
          Name: name,
          NoBall:noball,
          WideBall:wideball,
          NumberOf4s: numberOf4s,
          NumberOf6s: numberOf6s,
          OtherRun: otherRun,
          Run: run,
          Ball: ball,
          Wicket:wicket
        };
        var addDetails_data = JSON.stringify(addDetails);
        localStorage.setItem(name + "firstBowler", addDetails_data);
      }

      window.location = location.href;
    });
  });
  /* PREAVIEW SCORE*/
  $(document).ready(() => {
    var i;
    // var total = 0;
    // var totalBall = 0;
    // var totalExtra = 0;
    // var wicket = 0;
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

        var div1_nm = $("<p class='p_nm'></p>").text(json_extract.Name);
        

        var div1 = $("<div class='table_column1'></div>").append(
          div1_nm
          
        );
        var div2 = $("<div class='score_headingid'></div>").append(
          div2_o,
          div2_m,
          div2_r,
          div2_w,
          div2_nb,
          div2_wd
        );
        // var div3 = $(
        //   "<div style='width: 93%; height: 2px;border: 1px solid #fff;background-color: gray;'></div>"
        // ).text();
        var row = $("<div class='table_row'></div>").append(div1, div2);
        $(".first_team_score_preview2").append(row);

        // total = total + json_extract.Run + json_extract.Extras;
        // totalBall = totalBall + json_extract.Ball;
        // totalExtra = totalExtra + json_extract.Extras;
      }
    }
    // var name1 = $("<p class='name_txt'></p>").text("Extras");
    // var name2 = $("<p class='name_txt'></p>").text("Total");

    // var val1 = $("<p class='value_txt'></p>").text(totalExtra);
    // var val2 = $("<p class='value_txt'></p>").text(total);
    // var div4 = $("<div class='hr_line_for_scoreboard'></div>").text();

    // var footerSection1 = $("<div class='footer_score'></div>").append(
    //   name1,
    //   val1
    // );
    // var footerSection2 = $("<div class='footer_score'></div>").append(
    //   div4,
    //   name2,
    //   val2
    // );

    // var total_rn = $("<p class='run_footer_prev'></p>").text(
    //   total + "/" + wicket + " (0." + totalBall + ")"
    // );
    // var footerScore = $("<div class='footer_score'></div>").append(total_rn);
    // var scorePreviewSection = $(".first_team_score_preview2").append(
    //   footerSection1,
    //   footerSection2,
    //   footerScore
    // );
  });


  /*SECOND TEAM*/

  /*THIS IS FOR FIRST INNINGS*/
  $(document).ready(() => {
    $("#add2").click(() => {
      var name = $("#batting_name2").val();
      var noball = parseInt($("#noball2").val());
      var wideball = parseInt($("#wideball2").val());
      var wicket = parseInt($("#wicket2").val());
      var numberOf4s = parseInt($("#count_4s2").val());
      var numberOf6s = parseInt($("#count_6s2").val());
      var otherRun = parseInt($("#other_run2").val());
     
      

      if (localStorage.getItem(name + "SeBowler") != null) {
        var json_text = localStorage.getItem(name + "SeBowler");
        var json_extract = JSON.parse(json_text);
        var run = json_extract.Run+ numberOf4s * 4 + numberOf6s * 6 + otherRun+noball+wideball;
        
        var ball=json_extract.Ball;
        if(noball==0 && wideball==0){
            ball = ball + 1;
        }
        var wicket=wicket+json_extract.Wicket;
        
        var numberOf4s = json_extract.NumberOf4s + numberOf4s;
        var numberOf6s = json_extract.NumberOf6s + numberOf6s;
        var noball=json_extract.NoBall+noball;
        var wideball=json_extract.WideBall+wideball;
        
        var addDetails = {
            Name: name,
            NoBall:noball,
            WideBall:wideball,
            NumberOf4s: numberOf4s,
            NumberOf6s: numberOf6s,
            OtherRun: otherRun,
            Run: run,
            Ball: ball,
            Wicket:wicket
        };
        var addDetails_data = JSON.stringify(addDetails);
        localStorage.setItem(name + "SeBowler", addDetails_data);
      } else {
        var run = numberOf4s * 4 + numberOf6s * 6 + otherRun+noball+wideball;
        var ball=0;
        if(noball==0 && wideball==0){
            ball=1;
        }
        

        var addDetails = {
          Name: name,
          NoBall:noball,
          WideBall:wideball,
          NumberOf4s: numberOf4s,
          NumberOf6s: numberOf6s,
          OtherRun: otherRun,
          Run: run,
          Ball: ball,
          Wicket:wicket
        };
        var addDetails_data = JSON.stringify(addDetails);
        localStorage.setItem(name + "SeBowler", addDetails_data);
      }

      window.location = location.href;
    });
  });
  /* PREAVIEW SCORE*/
  $(document).ready(() => {
    var i;
    // var total = 0;
    // var totalBall = 0;
    // var totalExtra = 0;
    // var wicket = 0;
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

        var div1_nm = $("<p class='p_nm'></p>").text(json_extract.Name);
        

        var div1 = $("<div class='table_column1'></div>").append(
          div1_nm
          
        );
        var div2 = $("<div class='score_headingid2'></div>").append(
          div2_o,
          div2_m,
          div2_r,
          div2_w,
          div2_nb,
          div2_wd
        );
        // var div3 = $(
        //   "<div style='width: 93%; height: 2px;border: 1px solid #fff;background-color: gray;'></div>"
        // ).text();
        var row = $("<div class='table_row2'></div>").append(div1, div2);
        $(".second_team_score_preview3").append(row);

        // total = total + json_extract.Run + json_extract.Extras;
        // totalBall = totalBall + json_extract.Ball;
        // totalExtra = totalExtra + json_extract.Extras;
      }
    }
    // var name1 = $("<p class='name_txt'></p>").text("Extras");
    // var name2 = $("<p class='name_txt'></p>").text("Total");

    // var val1 = $("<p class='value_txt'></p>").text(totalExtra);
    // var val2 = $("<p class='value_txt'></p>").text(total);
    // var div4 = $("<div class='hr_line_for_scoreboard'></div>").text();

    // var footerSection1 = $("<div class='footer_score'></div>").append(
    //   name1,
    //   val1
    // );
    // var footerSection2 = $("<div class='footer_score'></div>").append(
    //   div4,
    //   name2,
    //   val2
    // );

    // var total_rn = $("<p class='run_footer_prev'></p>").text(
    //   total + "/" + wicket + " (0." + totalBall + ")"
    // );
    // var footerScore = $("<div class='footer_score'></div>").append(total_rn);
    // var scorePreviewSection = $(".first_team_score_preview2").append(
    //   footerSection1,
    //   footerSection2,
    //   footerScore
    // );
  });
