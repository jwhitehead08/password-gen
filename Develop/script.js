// Query selector for #generate
var generateBtn = document.querySelector("#generate");
  
// Password function for generating randonm password based on user input
var password = function() {
//When button is clicked: tell alert user that they must select at least one character typed to be 
//in their password and that passwords must be between 8 and 128 characters in lenght. 
// Click 'ok' to continue
  window.alert('Passwords must be between 8 and 128 characters in length and include one of the following character types:\n-lowercase\n-UPPERCASE\n-numeric (0-9)\n-special characters: !@#%&');

//Window alert, ask user if lower case characters are desired. Y or N.
var lowerCaseConfirm = window.confirm("Would you like to include lower case letters? Click 'OK' for yes or 'Cancel' for no.");

  
if (lowerCaseConfirm == true) {
    var lowerCase = ['abcdefghijklmnopqrstuvwxyz'];
  }
  else {
    var lowerCase = '';
  }


//Window alert: ask user if Upper case is desired. Y or N.
var upperCaseConfirm = window.confirm("Would you like to include UPPER CASE letters? Click 'OK' for yes or 'Cancel' for no.");
  if (upperCaseConfirm == true) {
    var upperCase = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
  }
  else {
    var upperCase = '';
  }
//Window alert: ask user if numeric characters are desired. Y or N.
var numericConfirm = window.confirm("Would you like to include numeric characters? Click 'OK' for yes or 'Cancel' for no.");

  if (numericConfirm == true) {
    var numeric = ['0123456789'];
  }
  else {
    var numeric = '';
  }
//Window alert: ask user if special characters are desired. Y or N. 
var specialCharConfirm = window.confirm("Would you like to include special characters (i.e. !@#%&)? Click 'OK' for yes or 'Cancel' for no.");

  if(specialCharConfirm == true) {
    var specialChar = ['!@#%&~?<'];
  }
  else {
    var specialChar = '';
  }

// If user does not select any character types, send back to start of function
  if (lowerCase == '' && upperCase == '' && numeric == '' && specialChar == '' ) {
    window.alert("You must select at least one character type to continue.");
    return password();
  }

  //Ask user to specify length of password (between 8 <= x =< 128).
var passwordLenthConfirm = window.prompt(
  "Please specify the desired length of Password by entering the number of characters below. Passwords must at least 8 characters long but no more than 128 characters.");

  // Validate user input
  if (passwordLenthConfirm >= 8 && passwordLenthConfirm <= 128) {
    passwordLength = passwordLenthConfirm
    window.alert("You have selected a password that is " + passwordLength + " characters in length and at least one character type was selected. Click 'OK' to see generate your new password."); 
  }

  //If user input includes number outside of acceptable range, return error message that includes 
  // prompt to input a number within acceptable range 
  else {
    window.alert("You provided invalid input! Passwords length must at least 8 characters long but no more than 128 characters. Please try again.");
    // returns to password length window prompt until valid answer is given
    return password();
  }
console.log(passwordLength);
 
  
  // Combine character types into string; turn into array in order to sort array
  // Then concatenate array to increase length and then rejoin into string
  var charCombo = 
    (lowerCase + upperCase + specialChar + numeric);
  var charComboTwo = ((((((charCombo.concat(charCombo)).concat(charCombo)).concat(charCombo)).concat(charCombo)).concat(charCombo)).concat(charCombo)).concat(charCombo);
  var charComboThree = charComboTwo.concat(charComboTwo); 
  var charNew = charComboThree.split("");
  console.log(charNew);
  var charNewNew = charNew.sort(() => Math.random() - .5);
  console.log(charNewNew);
  var charNewNewNew = charNewNew.join('');
  console.log(charNewNewNew);

  // Characters equals new character string for password function
  characters = charNewNewNew;
  
  // Use math.random to generate a new password
passwordText = '';
  for ( var i = 0; i < passwordLength; i++ ) {
    passwordText += characters.charAt((Math.random() * 
passwordLength));
 }


// Use innerHtml to print new password
document.getElementById("password").innerHTML = passwordText;

};

// event listener to generate button
generateBtn.addEventListener("click", password);

