// Assignment Code
var generateBtn = document.querySelector("#generate");
var resetBtn = document.querySelector("#reset");

// Function to generate a random password based on user specification.
function randomPass(char, len) {
  var charArray = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz", "1234567890", "!@#$%&*"];
  var passChars = "";

  if (char.includes("u") || char.includes("all")) {
    passChars += charArray[0];
  }
  if (char.includes("l") || char.includes("all")) {
    passChars += charArray[1];
  }
  if (char.includes("n") || char.includes("all")) {
    passChars += charArray[2];
  }
  if (char.includes("s") || char.includes("all")) {
    passChars += charArray[3];
  }

  var passGenerated = "";
  for (i = 0; i < len; i++) {
    passGenerated += passChars.charAt(Math.floor(Math.random() * passChars.length));
  }

  return passGenerated;
}

// ask user for input and use that input to generate a random password.
function generatePassword() {
  var passLen = parseInt(prompt("How long would you like this password to be? (between 8 and 128 characters"));
  if (passLen < 8 || passLen > 128) {
    alert("please enter a number between 8 and 128");
  }
  else {
    var charType = prompt("Which characters would you like in your password? (Type 'u' for uppercase, 'l' for lowercase, 'n' for number, 's' for special characters, or 'all' for all character types. You may type multiple letters.").toLowerCase();
    if (charType.includes('u') || charType.includes('l') || charType.includes('n') || charType.includes('s') || charType.includes('all')) {
      return randomPass(charType, passLen);
    }
    else {
      alert("Invalid character type.")
    }
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Function to reset password
function resetPassword() {
  var passwordText = document.querySelector("#password");
  console.log("hi");
  passwordText.value = "Reset successfully";

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

resetBtn.addEventListener("click", resetPassword);


