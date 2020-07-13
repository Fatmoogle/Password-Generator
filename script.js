// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword (){

  var randomLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", 
  "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  var randomUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  var randomNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  var randomSymbol = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

  var promptPasswordLength = prompt("Between 8 and 128, how many characters do you want your password to be?");
  promptPasswordLength = parseInt(promptPasswordLength);
  


  if (promptPasswordLength < 8 || promptPasswordLength > 128)
  {return "You need at least 8 and at most 128 characters"};

  var confirmUpper = confirm("Would you like to include upper case characters?");

  var confirmLower = confirm("Would you like to include lower case characters?");

  var confirmNumber = confirm("Would you like to include numbers?");

  var confirmSymbol = confirm("Would you like to include symbols?");

  var passwordAccumulator = [];

  if (confirmUpper) {
    passwordAccumulator = passwordAccumulator.concat(randomUpper)
  }

  if (confirmLower) {
    passwordAccumulator = passwordAccumulator.concat(randomLower)
  }

  if (confirmNumber) {
    passwordAccumulator = passwordAccumulator.concat(randomNumber)
  }

  if (confirmSymbol) {
    passwordAccumulator = passwordAccumulator.concat(randomSymbol)
  }

  if (passwordAccumulator.length == 0) {
    return "You need to choose at least one of the criteria to generate a password.";
  }


  var charAccum = "";

  for (var i = 0; i < promptPasswordLength; i++) {
    var random = Math.floor(Math.random() * passwordAccumulator.length);
    charAccum += passwordAccumulator[random];
  }
  
  console.log (promptPasswordLength);
  return (charAccum);
  

  //return(passwordAccumulator[random]);



}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


