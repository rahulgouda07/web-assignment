function generateCaptcha(){
let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let captcha = "";

for(let i=0;i<5;i++){
captcha += chars.charAt(Math.floor(Math.random()*chars.length));
}

document.getElementById("captchaText").innerText = captcha;

return captcha;
}

let currentCaptcha = generateCaptcha();


// SIGNUP

let signupForm = document.getElementById("signupForm");

if(signupForm){

signupForm.addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value;
let username = document.getElementById("username").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;
let captchaInput = document.getElementById("captchaInput").value;

if(captchaInput !== currentCaptcha){
alert("Captcha incorrect");
return;
}

let user = {
name:name,
username:username,
email:email,
password:password
};

localStorage.setItem("user", JSON.stringify(user));

alert("Account created successfully");

window.location.href="index.html";

});

}


// LOGIN

let loginForm = document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit", function(e){

e.preventDefault();

let loginUser = document.getElementById("loginUser").value;
let password = document.getElementById("loginPassword").value;
let captchaInput = document.getElementById("captchaInput").value;

if(captchaInput !== currentCaptcha){
alert("Captcha incorrect");
return;
}

let storedUser = JSON.parse(localStorage.getItem("user"));

if(
(storedUser.username === loginUser || storedUser.email === loginUser)
&& storedUser.password === password
){
alert("Login Successful");
}
else{
alert("Invalid credentials");
}

});

}