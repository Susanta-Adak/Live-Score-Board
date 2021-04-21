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
               
                // window.location.replace("pages/Admin/adminhome.html"); 
                var user=$("#login_username").val();
                sessionStorage.setItem("user_email",user);
                window.open('pages/Admin/adminhome.html','_self');
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
