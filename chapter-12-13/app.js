// QUESTION-NO-01


/*
Write a program that takes a character (number or string)
in a variable & checks whether the given input is a
number, uppercase letter or lower case letter. (Hint: ASCII
codes:- A=65, Z=90, a=97, z=122).
*/


/*
        // Function to check the character type
        function checkCharacterType(char) {
            const asciiCode = char.charCodeAt(0);
            if (asciiCode >= 65 && asciiCode <= 90) {
                return "Uppercase letter";
            } else if (asciiCode >= 97 && asciiCode <= 122) {
                return "Lowercase letter";
            } else if (!isNaN(char) && char.trim() !== "") {
                return "Number";
            } else {
                return "Not a number, uppercase or lowercase letter";
            }
        }

        // Example input
        const userInput = prompt("Enter a character (number or string):");
        const result = checkCharacterType(userInput);
        document.write("Input: " + userInput + "<br>");
        document.write("Type: " + result);
*/

// QUESTION-NO-02


/*
Write a JavaScript program that accept two integers and
display the larger. Also show if the two integers are equal.
*/


/*
        // Function to find the larger number
        function findLargerNumber(num1, num2) {
            if (num1 > num2) {
                return `${num1} is larger than ${num2}.`;
            } else if (num1 < num2) {
                return `${num2} is larger than ${num1}.`;
            } else {
                return "Both numbers are equal.";
            }
        }

        // Example input
        const num1 = parseInt(prompt("Enter the first integer:"));
        const num2 = parseInt(prompt("Enter the second integer:"));
        const result = findLargerNumber(num1, num2);
        document.write(result);
*/

// QUESTION-NO-03


/*
Write a program that takes input a number from user &
state whether the number is positive, negative or zero.
*/


/*
        // Function to check if the number is positive, negative, or zero
        function checkNumber(num) {
            if (num > 0) {
                return "The number is positive.";
            } else if (num < 0) {
                return "The number is negative.";
            } else {
                return "The number is zero.";
            }
        }

        // Example input
        const userInput = parseFloat(prompt("Enter a number:"));
        const result = checkNumber(userInput);
        document.write(result);
*/

// QUESTION-NO-04


/*
Write a program that takes a character (i.e. string of
length 1) and returns true if it is a vowel, false otherwise
*/


/*
      // Function to check if a character is a vowel
        function isVowel(char) {
            return 'aeiouAEIOU'.includes(char);
        }

        // Example input
        const userInput = prompt("Enter a character (one letter):");
        if (userInput.length === 1) {
            const result = isVowel(userInput) ? "True: It's a vowel." : "False: It's not a vowel.";
            document.write(result);
        } else {
            document.write("Please enter a single character.");
        }
*/

// QUESTION-NO-05


/*
Write a program that
a. Store correct password in a JS variable.
b. Asks user to enter his/her password
c. Validate the two passwords:
i. Check if user has entered password. If not, then
give message “ Please enter your password”
ii. Check if both passwords are same. If they are
same, show message “Correct! The password you
entered matches the original password”. Show
“Incorrect password” otherwise.
*/


/*
        // a. Store the correct password
        const correctPassword = "mySecurePassword123"; // Replace with your desired password

        // b. Ask the user to enter their password
        const userInput = prompt("Please enter your password:");

        // c. Validate the two passwords
        if (userInput === null || userInput.trim() === "") {
            // i. Check if user has entered a password
            document.write("Please enter your password.");
        } else if (userInput === correctPassword) {
            // ii. Check if both passwords are the same
            document.write("Correct! The password you entered matches the original password.");
        } else {
            document.write("Incorrect password.");
        }
*/

// QUESTION-NO-06


/*
This if/else statement does not work. Try to fix it:
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
else
greeting = "Good evening";
}
*/


/*
var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

console.log(greeting);
*/


// QUESTION-NO-07


/*
Write a program that takes time as input from user in 24
hours clock format like: 1900 = 7pm. Implement the
following case using if, else & else if statements
*/


/*
        // Function to display greeting based on time
        function getGreetingBasedOnTime(time) {
            if (time >= 0 && time < 1200) {
                return "Good Morning!";
            } else if (time >= 1200 && time < 1700) {
                return "Good Afternoon!";
            } else if (time >= 1700 && time < 2100) {
                return "Good Evening!";
            } else if (time >= 2100 && time < 2400) {
                return "Good Night!";
            } else {
                return "Invalid time input. Please enter time in 24-hour format (0000 - 2359).";
            }
        }

        // Taking time input from the user
        const userInput = prompt("Enter time in 24-hour format (e.g., 1900 for 7 PM):");

        // Parsing input as an integer
        const timeIn24Format = parseInt(userInput);

        // Get greeting based on the provided time
        const greeting = getGreetingBasedOnTime(timeIn24Format);

        // Display the greeting
        document.write(greeting);
*/