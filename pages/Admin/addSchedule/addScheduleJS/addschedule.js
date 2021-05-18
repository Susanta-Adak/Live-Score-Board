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

function upload_pic1() {
  var input = document.getElementById("file_name1");
  var freader = new FileReader();
  freader.readAsDataURL(input.files[0]);
  freader.onloadend = function (event) {
    var show = document.getElementById("profile_photo_for_logo1");
    var image_url = event.target.result;
    show.style.background = "url(" + event.target.result + ")";
    show.style.backgroundRepeat = "no-repeat";
    show.style.backgroundSize = "cover";
    document.getElementById("upload_icon").style.display = "none";

    document.getElementById("mainpage").style.display = "none";

    window.location = location.href;
  };
}
function upload_pic2() {
  var input = document.getElementById("file_name2");
  var freader = new FileReader();
  freader.readAsDataURL(input.files[0]);
  freader.onloadend = function (event) {
    var show = document.getElementById("profile_photo_for_logo2");
    var image_url = event.target.result;
    show.style.background = "url(" + event.target.result + ")";
    show.style.backgroundRepeat = "no-repeat";
    show.style.backgroundSize = "cover";
    document.getElementById("upload_icon").style.display = "none";

    document.getElementById("mainpage").style.display = "none";

    window.location = location.href;
  };
}
function add() {
  window.location = location.href;
  alert("Succesfully Added!");
}
