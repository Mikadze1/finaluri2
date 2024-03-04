"use strict";

const formElement = document.getElementById("resgitration");

formElement.addEventListener("submit", function (event) {
  event.preventDefault();

  const errors = {};

  //username
  let usernameValue = document.getElementById("usernamefield").value;
  var usernameregex =/^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/;



  if(usernameValue.match(usernameregex)){
    errors.username = '';
  }else{
    errors.username = 'Invalid username'
  }


  if (usernameValue == "") {
    errors.username = "Username Field can not be empty";
  }





  // password
  let passwValue = document.getElementById("passwordfield").value;
  let passregex =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  

  if(passwValue.match(passregex)) {
    errors.passw = "";
  }else{
    errors.passw = "Invalid password";
  }

  if (passwValue == "") {
    errors.passw = "Password field can not be emtpy";
  }



  // შეცდომები
  for (let item in errors) {
    console.log(item); //key in errors

    let errorPElement = document.getElementById("error-" + item);
    console.log(errorPElement);

    if (errorPElement) {
      errorPElement.textContent = errors[item];
    }

  }

  console.log(errors);
  if (Object.keys(errors).length == 0) {
    formElement.submit();
  }
});



// show hide password
let passwShow = document.getElementById("passwordfield");
let icon = document.getElementById("showIcon");

icon.addEventListener("click", function() {
  if (passwShow.type == "password") {
    passwShow.setAttribute("type", "text");
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    passwShow.setAttribute("type", "password");
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }    
});
