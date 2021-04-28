/* profile photo in navebar*/
function show_profile_nave(){
    var email=sessionStorage.getItem("user_email");
    if(localStorage.getItem(email+"user_profileimage")!=null){
        
        var pic_box=document.getElementById("profile_photo");
        var imageurl=localStorage.getItem(email+"user_profileimage");
        pic_box.style.background="url("+imageurl+")";
        pic_box.style.backgroundRepeat="no-repeat";
        pic_box.style.backgroundSize="cover";
        document.getElementById("upload_icon").style.display="none";
    }
}
show_profile_nave();


function show_profile_p(){
    var email=sessionStorage.getItem("user_email");
    if(localStorage.getItem(email+"user_profileimage")!=null){
        
        var pic_box=document.getElementById("profile_photo_forsidebar");
        var imageurl=localStorage.getItem(email+"user_profileimage");
        pic_box.style.background="url("+imageurl+")";
        pic_box.style.backgroundRepeat="no-repeat";
        pic_box.style.backgroundSize="cover";
        document.getElementById("upload_icon").style.display="none";
    }
}
show_profile_p();
function upload_pic(){
    var input=document.getElementById("file_name");
    var freader=new FileReader();
    freader.readAsDataURL(input.files[0]);
    freader.onloadend=function(event){
        var show=document.getElementById("profile_photo_forsidebar");
        var image_url=event.target.result;
        show.style.background="url("+event.target.result+")";
        show.style.backgroundRepeat="no-repeat";
        show.style.backgroundSize="cover";
        document.getElementById("upload_icon").style.display="none";

        localStorage.setItem(sessionStorage.getItem('user_email')+"user_profileimage",image_url);
        document.getElementById("mainpage").style.display="none";
    
        window.location=location.href;
        
    }
    
}

// dropdown manu
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}
/*EADIT BUTTON SECTION*/
$(document).ready(()=>{
    $(".eadit_btn_section,.eadit_btn_section2,.eadit_btn_section3,.eadit_btn_section4,.eadit_btn_section5,.eadit_btn_section6").hide();
    /*m1*/
    $(".match_1").mouseenter(()=>{
        $(".eadit_btn_section").show();
    }
    );
    $(".match_1").mouseleave(()=>{
        $(".eadit_btn_section").hide();
    });
    /*m2*/
    $(".match_2").mouseenter(()=>{
        $(".eadit_btn_section2").show();
    }
    );
    $(".match_2").mouseleave(()=>{
        $(".eadit_btn_section2").hide();
    });
    /*m3*/
    $(".match_3").mouseenter(()=>{
        $(".eadit_btn_section3").show();
    }
    );
    $(".match_3").mouseleave(()=>{
        $(".eadit_btn_section3").hide();
    });
    /*m4*/
    $(".match_4").mouseenter(()=>{
        $(".eadit_btn_section4").show();
    }
    );
    $(".match_4").mouseleave(()=>{
        $(".eadit_btn_section4").hide();
    });
    /*m5*/
    $(".match_5").mouseenter(()=>{
        $(".eadit_btn_section5").show();
    }
    );
    $(".match_5").mouseleave(()=>{
        $(".eadit_btn_section5").hide();
    });
    /*m6*/
    $(".match_6").mouseenter(()=>{
        $(".eadit_btn_section6").show();
    }
    );
    $(".match_6").mouseleave(()=>{
        $(".eadit_btn_section6").hide();
    });
   }

);