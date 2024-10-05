// question-01

// Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

/*        
// Get first and last name from user
let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");

// Merge first and last name into fullName
let fullName = firstName + " " + lastName;

// Greet the user
document.write(`<h2>Hello, ${fullName}! Welcome!</h2>`);
 */



// question-02

// Write a progam to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser.

/*  
// Get the favorite mobile phone model from the user
let mobileModel = prompt("Enter your favorite mobile phone model:");

// Display the model and its length
document.write(`<h2>Your favorite mobile phone model is: ${mobileModel}</h2>`);
document.write(`<p>Length of input: ${mobileModel.length}</p>`); */



// question-03

// Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser.

/*  
// Define the word
let word = "Pakistani";

// Find the index of the letter 'n'
let index = word.indexOf('n');

// Display the result
document.write(`<h2>The index of 'n' in the word 'Pakistani' is: ${index}</h2>`); */



// question-04

// Write a program to find the last index of letter “l” in the 
// word “Hello World” and display the result in your browser.

/*  
let word = "Hello World";
let lastIndex = word.lastIndexOf('l');
document.write(`<h2>The last index of 'l' in the word 'Hello World' is: ${lastIndex}</h2>`); */

// question-05

// Write a program to find the character at 3rd index in the 
// word “Pakistani” and display the result in your browser. 


/*  
let word = "Pakistani";
let charAtIndex = word.charAt(3); // Finding the character at index 3
document.write(`<h2>The character at the 3rd index in the word 'Pakistani' is: ${charAtIndex}</h2>`); */

// question-06

// Repeat Q1 using string concat() method.

/* 
let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");
let fullName = firstName.concat(" ", lastName); // Using concat method to combine names
document.write(`<h2>Hello, ${fullName}! Welcome!</h2>`); */

// // question-07

// Write a program to replace the “Hyder” to “Islam” in the 
// word “Hyderabad” and display the result in your browser. 


/*   
let city = "Hyderabad";
let newCity = city.replace("Hyder", "Islam");
document.write(`<h2>The new city name is: ${newCity}</h2>`); */

// question-08

// Write a program to replace all occurrences of “and” in the 
// string with “&” and display the result in your browser. 
// var message = “Ali and Sami are best friends. They play cricket and 
// football together.”


/*  
let message = "Ali and Sami are best friends. They play cricket and football together.";
let newMessage = message.replace(/and/g, "&"); // Replacing all occurrences using regex
document.write(`<h2>${newMessage}</h2>`); */

// question-09

// Write a program that converts a string “472” to a number 
// 472. Display the values & types in your browser.

/*         
let str = "472";
let num = Number(str); // Convert string to number
document.write(`<h2>String value: ${str} (Type: ${typeof str})</h2>`);
document.write(`<h2>Number value: ${num} (Type: ${typeof num})</h2>`);
 */

// question-10

// Write a program that takes user input. Convert and 
// show the input in capital letters.

/* 
let userInput = prompt("Enter some text:");
let capitalizedInput = userInput.toUpperCase(); // Convert to uppercase
document.write(`<h2>Your input in capital letters: ${capitalizedInput}</h2>`); */

// question-11

// Write a program that takes user input. Convert and 
// show the input in title case. 

/*  
let userInput = prompt("Enter some text:");
        
// Convert to title case
let titleCaseInput = userInput.toLowerCase().split(' ').map(word => {
return word.charAt(0).toUpperCase() + word.slice(1);
}).join(' ');

document.write(`<h2>Your input in title case: ${titleCaseInput}</h2>`); */

// question-12

// Write a program that converts the variable num to 
// string. 
// Remove the dot to display “3536” display in your browser.

/* 
let username = prompt("Enter your username:");
let invalidChars = ['@', '.', ',', '!'];
let isValid = true;

for (let char of invalidChars) {
if (username.includes(char)) {
isValid = false;
break;
}
}
if (!isValid) {
alert("Invalid username. Please avoid using special characters like @, ., !, ,");
} 
else {
document.write(`<h2>Valid Username: ${username}</h2>`);
}
 */

// question-13

// Write a program to take user input and store username 
// in a variable. If the username contains any special symbol 
// among [@ . , !], prompt the user to enter a valid username. 
// For character codes of [@ . 
// Note: 
// ASCII code of ! is 33 
// ASCII code of , is 44 
// ASCII code of . is 46 
// ASCII code of @ is 64

/* 
// Function to validate username
function isValidUsername(username) {
// Loop through each character in the username
for (let i = 0; i < username.length; i++) {
let charCode = username.charCodeAt(i); // Get ASCII code of character

// Check if character is among the restricted ones
if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
return false; // Invalid username if it contains special symbols
 }
}
return true; // Username is valid
}

// Ask user for input
let username = prompt("Enter your username:");
// Validate the username
if (isValidUsername(username)) {
document.write(`<h2>Welcome, ${username}!</h2>`);
} else {
alert("Invalid username! Please enter a username without special characters [ @ . , ! ]");
location.reload(); // Reload the page to re-enter username
} */

// question-14

/*
let items = ["cake", "apple pie", "cookie", "chips", "patties"];
let userInput = prompt("Enter the item to search:").toLowerCase();
let found = items.some(item => item.toLowerCase() === userInput);

if (found) {
document.write(`<h2>${userInput} is available in the list.</h2>`);
}
 else {
document.write(`<h2>${userInput} is not available in the list.</h2>`);
} */

// question-15

/*     
let password = prompt("Enter your password:");
let hasAlphabets = /[a-zA-Z]/.test(password);
let hasNumbers = /[0-9]/.test(password);
let startsWithLetter = /^[a-zA-Z]/.test(password);
let minLength = password.length >= 6;

if (!hasAlphabets || !hasNumbers || !startsWithLetter || !minLength) {
alert("Password must contain alphabets and numbers, must start with a letter, and be at least 6 characters long.");
}
else {
document.write(`<h2>Password is valid.</h2>`);
} */

// question-16

/* 
let university = "University of Karachi";
let array = university.split(' ');

// Display each element on a new line
for (let i = 0; i < array.length; i++) {
document.write(`<p>${array[i]}</p>`);
} */

// question-17

/* 
let userInput = prompt("Enter some text:");
let lastCharacter = userInput.charAt(userInput.length - 1);

document.write(`<h2>The last character of your input is: ${lastCharacter}</h2>`); */

// question-18

/* 
let text = "The quick brown fox jumps over the lazy dog";
let count = (text.match(/the/gi) || []).length;

document.write(`<h2>Occurrences of 'the': ${count}</h2>`); */



