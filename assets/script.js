//global value for the generate action
const generate = document.getElementById('generate');

//function to combine lower functions and create the text onto the app
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//event/function for desired password length, restriction as well with a minimum of 8 and maximum of 128, also fail safe when no input is given that creates a password
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

    //prompts/confirms for adding additional attributes to desired password
  var numbers = confirm("Do you want numbers in your password?");

  var lowerCases = confirm("Do you want lowercases in your password?");

  var upperCases = confirm("Do you want uppercases in your password?");

  var specialCharacters = confirm("Do you want special characters in your password?");

//creating if true/false statements for options to include preferred password
  if (numbers === true) {
    var numbers =["1234567890"];
  }

  if (numbers === false) {
    var numbers = [""];
  }

  if (lowerCases === true) {
    var lowerCases =["qwertyuioplkjhgfdsazxcvbnm"];
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

  //creating the value to get the random generated password attributes
  var randomPass = numbers + lowerCases + upperCases + specialCharacters

  //where the filled password will be created and showed into the for loop
  var password = [""];

  //random math generator for the password
  for (let i = 0; i < passwordLength; i++) {
    var randomPassword = randomPass[Math.floor(Math.random()* randomPass.length)];
    password += randomPassword
  }

  //return value for the password created
  return password;

} 

//event listener for the password is to be generated and written where
generate.addEventListener("click", writePassword);

