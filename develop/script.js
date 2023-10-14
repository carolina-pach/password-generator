// Assignment Code
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

} 

var ar =
  function generatePassword() {

    var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P"];
    var lowercaseArray = ["a", "b", "c"];
    var numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    var specialArray = ["$", "%", "&", "#", "!", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", ">", "<", "=", "?", "@", "[", "{", "}", "]", "\"", "^", "`", "|", "~"];
    var passwordArray = [];
    var guaranteed = [];
    var length = prompt("How long do you want your password? (Must be between 8 and 128)");
    var lowercase = confirm("Would you like to include lowercase letters?");
    var uppercase = confirm("Would you like to include uppercase letters?");
    var number = confirm("Would you like to include numeric character");
    var special = confirm("Would you like to include special characters ");



    if (uppercase) {
      passwordArray.push(...uppercaseArray);




    }

    if (lowercase) {
      passwordArray.push(...lowercaseArray);

    }

    if (number) {
      passwordArray.push(...numberArray);

    }

    if (special) {
      passwordArray.push(...specialArray);
    }

    var password = "";


    for (var i = 0; i < length; i++) {
      var index = Math.floor(Math.random() * passwordArray.length);
      var computerChoice = passwordArray[index];
      password = password + computerChoice;

    }

    return password
  }


generateBtn.addEventListener("click", writePassword);
