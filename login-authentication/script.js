var signinform=document.querySelector(".signinform");
var signupform=document.querySelector(".signupform");


var openSignupform=document.querySelector("#opensignup");
var openSigninform=document.querySelector("#opensignin");

var emailarray=[];
var passwordarray=[];

var displaymsg=document.querySelector("#displaymsg");

function register(event){
    event.preventDefault();
    var email=document.querySelector("#email").value;
    var password=document.querySelector("#password").value;
    var retypedpassword=document.querySelector("#retypedpassword").value;
    if(email==""){
        displaymsg.innerHTML="Enter Email..";
    }
    else if(password==""){
        displaymsg.innerHTML="Enter Password..";
    }
    else if(password.length >= 8){
        if(password !=retypedpassword){
            displaymsg.innerHTML="Password not matched.";
            setTimeout(function(){
                displaymsg.innerHTML="";
            },2000);
        }
        else if(emailarray.indexOf(email) == -1){
            emailarray.push(email);
            passwordarray.push(password);
            displaymsg.innerHTML="Register Successful..";
            displaymsg.style.color="aqua";
            document.querySelector("#Username").value="";
            document.querySelector("#email").value="";
            document.querySelector("#password").value="";
            document.querySelector("#retypedpassword").value="";
        }
        else{
            displaymsg.innerHTML="Email already exists.";
            setTimeout(function(){
                displaymsg.innerHTML="";
            },2000);
        }
    }else{
        alert("Password length should be more than 8 to build strong password..");
    }
}

var displayMsg=document.querySelector(".displayMsg");
function login(event){
    event.preventDefault();
    var Email=document.querySelector("#Email").value;
    var Password=document.querySelector("#Password").value;
    var i=emailarray.indexOf(Email);
    if(Email==""){
        displayMsg.innerHTML="Enter Email..";
    }
    else if(Password==""){
        displayMsg.innerHTML="Enter Password..";
    }
    else if(i==-1){
        displayMsg.innerHTML="Email doesnot exists.";
        setTimeout(function(){
            displayMsg.innerHTML="";
        },2000);
    }
    else if(passwordarray[i]!=Password){
        displayMsg.innerHTML="Wrong Password";
        setTimeout(function(){
            displayMsg.innerHTML="";
        },2000);
    }
    else{
        displayMsg.innerHTML="Welcome..";
        displayMsg.style.color="aqua";
        setTimeout(function(){
            document.querySelector("#Email").value="";
            document.querySelector("#Password").value="";
            signinform.style.visibility="hidden";
            signinform.style.display="none";
            signupform.style.visibility="hidden";
            signupform.style.display="none";
            document.querySelector(".container").style.cssText="background-color:white; padding:20px;";
            var header=document.createElement("h1");
            header.classList.add("header");
            header.innerHTML="Hello,"+ Email;
            document.querySelector(".container").appendChild(header);
            var para=document.createElement("p");
            para.classList.add("secure-pagemsg");
            para.innerHTML="You are in a secured page..";
            document.querySelector(".container").appendChild(para);
            var button=document.createElement("button");
            button.classList.add("btn");
            button.innerHTML="Signout";
            button.addEventListener("click",function(){
                location.reload();
            });
            document.querySelector(".container").appendChild(button);
        },2000);
    }
}   
openSignupform.addEventListener("click",function(){
    signinform.style.visibility="hidden";
    signinform.style.display="none";
    signupform.style.visibility="visible";
    signupform.style.display="block";
});
openSigninform.addEventListener("click",function(){
    signupform.style.visibility="hidden";
    signupform.style.display="none";
    signinform.style.visibility="visible";
    signinform.style.display="block";
});

