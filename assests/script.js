// Assignment Code
var generateBtn = document.querySelector("#generate");

//assigned variables as strings
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var special = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\", ", ",", "]", "^", "_", "`", "{", "|", "}", "~"]

// defining empty object for user selection options //
var passwordOptions = {}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//prompt to choose password length
function generatePassword() {
  var chars = prompt("Choose a number between 8 and 128")

  if (chars < 8 || chars > 128) {
    alert("Please enter a valid number between 8 and 128")

    return

  }

//prompts for password creation
  var numbers = confirm("Do you want to include numbers in your password? Click OK for Yes and Cancel for No")
  var specials = confirm("Do you want to include special characters in your password? Click OK for Yes and Cancel for No")
  var lower = confirm("Do you want to include lowercase characters in your password? Click OK for Yes and Cancel for No")
  var upper = confirm("Do you want to include uppercase characters in your password? Click OK for Yes and Cancel for No")
  
  //if user selects no to all questions
  if (numbers === false && specials === false && lower === false && upper === false) {
    alert("Please choose at least one of the following:")
    return generatePassword()
  }

//If statements created to combine available characters in response to user's selection
  var superArray = []

  if (numbers === true){
    superArray = superArray.concat(numeric)
  }
  if (specials === true){
    superArray = superArray.concat(special)
  }
  if (lower === true){
    superArray = superArray.concat(lowercase)
  }
  if (upper === true){
    superArray = superArray.concat(uppercase)
  }
  
  console.log(superArray)

  var password = []

  //created for loop to loop throug array and randomize password.
  for (let i = 0; i < chars; i++) {
    var index = Math.floor(Math.random() * superArray.length)
    var randomchar = superArray[index]
    password.push(randomchar)

  }

  return password.join("")
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

