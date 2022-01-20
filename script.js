const generate = document.getElementById('generate');

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword(event) {
  var passwordLength = prompt("Please enter the number of characters you want for you new password.  It must be more than 8 but less than 128.");
    if(passwordLength < 8 || passwordLength > 128) {
      alert("Must contain between 8-128 Characters")
      event.preventDefault();
    }

    if(passwordLength ===false && numbers ===false && lowerCases ==false && upperCases ==false) {
      alert("To make a password you need characters dude");
      return generatePassword
    }

  var numbers = confirm("Do you want numbers in your password?");

  var lowerCases = confirm("Do you want lowercases in your password?");

  var upperCases = confirm("Do you want uppercases in your password?");

  var specialCharacters = confirm("Do you want special characters in your password?");


  if (numbers === true) {
    var numbers =["1234567890"];
  }

  if (numbers === false) {
    var numbers = [""];
  }

  if (lowerCases === true) {
    var LowerCases =["qwertyuioplkjhgfdsazxcvbnm"];
  }

  if (lowerCases === false) {
    var lowerCases = [""];
  }

  if (upperCases === true) {
    var upperCases = ["QWERTYUIOPLKJHGFDSAZXCVBNM"];
  }

  if (upperCases === false) {
    var upperCases = [""];
  }

  if (specialCharacters === true) {
    var specialCharacters = ["!@#$%^&*()"]
  }

  if (specialCharacters === false) {
    var specialCharacters = [""];
  }

  var randomPass = numbers + lowerCases + upperCases + specialCharacters

  var password = [""];

  for (let i = 0; i < passwordLength; i++) {
    var randomPassword = randomPass[Math.floor(Math.random()* randomPass.length)];
    password += randomPassword
  }
//gotta love the randomness^

  return password;

} 


generate.addEventListener("click", writePassword);


