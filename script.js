// Assignment Code
const generateBtn = document.querySelector("#generate");
const resetBtn = document.querySelector("#reset");

// Function to generate a random password based on user specification.
function randomPass(charT, len) {
  const charArray = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz", "1234567890", "!@#$%&*"];
  let passChars = "";

  for (let i = 0; i < charT.length; i++) {
    if (charT[i].value === "uppercase") {
      passChars += charArray[0];
    } 
    if (charT[i].value === "lowercase") {
      passChars += charArray[1];
    }
    if (charT[i].value === "numbers") {
      passChars += charArray[2];
    }
    if (charT[i].value === "special") {
      passChars += charArray[3];
    }
  }

  let passGenerated = "";
  for (let i = 0; i < len; i++) {
    passGenerated += passChars.charAt(Math.floor(Math.random() * passChars.length));
  }

  return passGenerated;
}

// ask user for input and use that input to generate a random password.
function generatePassword() {
  const passLen = document.querySelector("#length").value;
  if (passLen < 8 || passLen > 128) {
    alert("please enter a number between 8 and 128");
  } else {
    const charType = document.querySelectorAll('input[type="checkbox"]:checked');
    return randomPass(charType, passLen); 
    }
}


// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Function to reset checkboxes
function resetCheck() {
  var items = document.getElementsByName('check');
  for (var i = 0; i < items.length; i++) {
      if (items[i].type == 'checkbox')
          items[i].checked = false;
  }
}

// Function to reset password
function resetPassword() {
  const passwordText = document.querySelector("#password");
  const passwordLength = document.querySelector("#length");
  passwordLength.value = "";
  passwordText.value = "Reset successfully";

  resetCheck();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

resetBtn.addEventListener("click", resetPassword);



