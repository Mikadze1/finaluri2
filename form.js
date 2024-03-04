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
  let passw2Value = document.getElementById("passwordfield2").value;
  let passregex =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  

  if(passwValue.match(passregex)) {
    errors.passw = "";
  }else{
    errors.passw = "Invalid password";
  }

  if (passwValue == "") {
    errors.passw = "Password field can not be emtpy";
  }

  
  if (passwValue != passw2Value) {
    errors.passw2 = "Passwords do not match";
  }


  // radio
  let gender = false;

  formElement.querySelectorAll('[name = "gender"]').forEach((item) => {
    if (item.checked) {
      gender = true;
    }
  });

  if (!gender) {
    errors.gender = "Please select Your Gender";
  }
  // formElement.querySelectorAll('.radio-class')

  //checkbox
  let checkInput = document.getElementById("agree").checked;

  if (!checkInput) {
    errors.check = "You must agree our terms and conditions";
  }

  formElement.querySelectorAll(".error-text").forEach((el) => {
    el.textContent = " ";
  });


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

// email validation - regex
let email = document.getElementById("emailfield");

function validationEmail() {
  let emailValue = document.getElementById("emailfield").value;
  let emailErrorText = document.getElementById("emailError");
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (regex.test(emailValue)) {
    emailErrorText.innerText = "Your Email Is Valid";
    emailErrorText.style.color = "green";
  } else {
    emailErrorText.innerText = "Your Email Is Invalid";
    emailErrorText.style.color = "red";
  }

  if (emailValue == "") {
    emailErrorText.innerHTML = " ";
  }
}

email.addEventListener("keyup", validationEmail);




