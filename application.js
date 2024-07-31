var Sign_btn = document.getElementById("Sign_lnk");
var login_btn = document.getElementById("login_lnk"); 
var login_box=document.getElementById("login");
var sinup_box=document.getElementById("sinup");
login_btn.onclick=function(){

    login_box.style.display="block";
    sinup_box.style.display="none";


}
Sign_btn.onclick=function(){
login_box.style.display="none";
sinup_box.style.display="block";


}