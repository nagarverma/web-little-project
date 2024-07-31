/* start sign up codind */
var login_frm = document.getElementById("login_frm");
var sign_up = document.getElementById("sign_up");

sign_up.onsubmit=function()
{
    var user = document.getElementById("user_name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var pass = document.getElementById("password").value;

    var user_object_data = {user_name:user,email:email,phone:phone,pass:pass}
    var user_text_data = JSON.stringify(user_object_data);


    if(user!="" && email !="" && phone !="" && pass !="")
        {
            localStorage.setItem(email,user_text_data);
            var signup_btn=document.getElementById("signup_btn");
            signup_btn.style.background="#14b129";
            signup_btn.innerHTML="<i class='fas fa-check-circle' aria-hidden='true'></i> Sign up Sucessful !";
            setTimeout(function(){
                signup_btn.style.background="linear-gradient(to right, #3f2b96, #a8c0ff)";
                signup_btn.innerHTML="Sign up";
                sign_up.reset();
            },3000);
            

            return false;

        }


        
    }
/* start sign up codind */


/* start validation coding */

        var email_input = document.getElementById("email");
        email_input.onchange = function()
        {
            var email = document.getElementById("email").value;
            var eamil_notoce =document.getElementById("eamil_notoce");
            var signup_btn=document.getElementById("signup_btn");

            if(localStorage.getItem(email) != null)
                {
                    eamil_notoce.style.display="block";
                    email_input.style.borderBottomColor="red";
                    signup_btn.disabled= true;
                    signup_btn.style.background="#ccc"; 


                    email_input.onclick=function()
                    {
                        email_input.value = "";
                        email_input.style.borderBottomColor ="#ccc";
                        eamil_notoce.style.display="none";
                        signup_btn.disabled= false;
                        signup_btn.style.background="linear-gradient(to right, #3f2b96, #a8c0ff)";








                    }



                
                }
         }
            
                


    /* /* start Login up codind */
 

var login_frm =document.getElementById("login_frm");
login_frm.onsubmit =function ()
{
    var email =document.getElementById("login_email").value;
    var password =document.getElementById("phone").value;
    if(localStorage.getItem(email)== null)
    {
        alert("your eamil id not registered")
    }
    else
    {
         var text_data=localStorage.getItem(email);
         var object_data=JSON.parse(text_data);
         var correct_email=object_data.email;
         var correct_password=object_data.password;

        if(email==correct_email)
        {
            if(password == correct_password)
            {
                alert("login sucess");
            }
            else
            {
                alert("Wrong password");
            }
        }


    }
    /* End login up codind */

}           

        



