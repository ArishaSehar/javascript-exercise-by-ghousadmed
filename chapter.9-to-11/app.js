// QUESTION-NO-01


/*
. Write a program to take “city” name as input from user. If
user enters “Karachi”, welcome the user like this:
“Welcome to city of lights”
*/

/*
      function welcomeUser() {
            // Get the city name input from the user
            var city = prompt("Please enter your city name:");

            // Check if the city is "Karachi" and display the appropriate message
            if (city.toLowerCase() === "karachi") {
                alert("Welcome to the city of lights");
            } else {
                alert("Welcome to " + city);
            }
        }
*/


// QUESTION-NO-02


/*
Write a program to take “gender” as input from user. If the
user is male, give the message: Good Morning Sir. If the
user is female, give the message: Good Morning Ma’am.
*/

/*
        function greetUser() {
            // Get gender input from the user
            var gender = prompt("Please enter your gender (male/female):").toLowerCase();

            // Determine the greeting message based on gender
            if (gender === "male") {
                alert("Good Morning Sir.");
            } else if (gender === "female") {
                alert("Good Morning Ma’am.");
            } else {
                alert("Invalid input! Please enter 'male' or 'female'.");
            }
        }
*/


// QUESTION-NO-03


/*
Write a program to take input color of road traffic signal
from the user & show the message according to this table:
Signal color Message
Red Must Stop
Yellow Ready to move
Green Move now
*/

/*
        function checkTrafficSignal() {
            // Get the color input from the user
            var color = prompt("Enter the color of the traffic signal (Red, Yellow, Green):").toLowerCase();

            // Determine the message based on the color
            if (color === "red") {
                alert("Must Stop");
            } else if (color === "yellow") {
                alert("Ready to move");
            } else if (color === "green") {
                alert("Move now");
            } else {
                alert("Invalid color! Please enter Red, Yellow, or Green.");
            }
        }
*/


// QUESTION-NO-04


/*
Write a program to take input remaining fuel in car (in
litres) from user. If the current fuel is less than 0.25litres,
show the message “Please refill the fuel in your car”
*/

/*
        function checkFuel() {
            // Get user input
            var fuel = parseFloat(prompt("Enter the remaining fuel in your car (in litres):"));

            // Check if the input is a valid number
            if (isNaN(fuel)) {
                alert("Please enter a valid number.");
                return; // Exit the function if the input is invalid
            }

            // Check the fuel level
            if (fuel < 0.25) {
                alert("Please refill the fuel in your car.");
            } else {
                alert("You have sufficient fuel.");
            }
}
*/


// QUESTION-NO-05


/*
Run this script, & check whether alert message would be
displayed or not. Record the outputs.
a. var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
b. var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
c. var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
d. var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
e. if (true){
alert("True");
}
if (false){
alert("False");
}
f. if("car" < "cat"){
alert("car is smaller than cat");
}

*/

/*
var a = 4;
if (++a === 5){
    alert("given condition for variable a is true");
}

var b; // Declare variable b
if (b++ === 83){
    alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13){
    alert("condition 1 is true");
}
if (c === 13){
    alert("condition 2 is true");
}
if (++c < 14){
    alert("condition 3 is true");
}
if(c === 14){
    alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
    alert("The cost equals");
}

if (true){
    alert("True");
}
if (false){
    alert("False");
}

if("car" < "cat"){
    alert("car is smaller than cat");
}


var a = 4;
if (++a === 5){
    alert("given condition for variable a is true");
}


var b; // Declare variable b
if (b++ === 83){
    alert("given condition for variable b is true");
}


var c = 12;
if (c++ === 13){
    alert("condition 1 is true");
}
if (c === 13){
    alert("condition 2 is true");
}
if (++c < 14){
    alert("condition 3 is true");
}
if(c === 14){
    alert("condition 4 is true");
}


var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
    alert("The cost equals");
}


if (true){
    alert("True");
}
if (false){
    alert("False");
}


if("car" < "cat"){
    alert("car is smaller than cat");
}

*/


// QUESTION-NO-06


/*
Write a program to take input the marks obtained in three
subjects & total marks. Compute & show the resulting
percentage on your page. Take percentage & compute
grade as per following table:
Show the total marks, marks obtained, percentage, grade &
remarks like:
*/

/*
        // Taking input from the user
        const subject1 = parseFloat(prompt("Enter marks obtained in Subject 1:"));
        const subject2 = parseFloat(prompt("Enter marks obtained in Subject 2:"));
        const subject3 = parseFloat(prompt("Enter marks obtained in Subject 3:"));
        const totalMarks = parseFloat(prompt("Enter total marks:"));

        // Calculate total obtained marks and percentage
        const totalObtainedMarks = subject1 + subject2 + subject3;
        const percentage = (totalObtainedMarks / totalMarks) * 100;

        // Determine grade and remarks based on percentage
        let grade, remarks;

        if (percentage >= 80) {
            grade = 'A+';
            remarks = 'Excellent';
        } else if (percentage >= 70) {
            grade = 'A';
            remarks = 'Very Good';
        } else if (percentage >= 60) {
            grade = 'B';
            remarks = 'Good';
        } else if (percentage >= 50) {
            grade = 'C';
            remarks = 'Average';
        } else if (percentage >= 40) {
            grade = 'D';
            remarks = 'Needs Improvement';
        } else {
            grade = 'F';
            remarks = 'Fail';
        }

        // Displaying the results
        document.write("<div class='result'>");
        document.write("<h3>Results</h3>");
        document.write(`Total Marks: ${totalMarks}<br>`);
        document.write(`Marks Obtained: ${totalObtainedMarks}<br>`);
        document.write(`Percentage: ${percentage.toFixed(2)}%<br>`);
        document.write(`Grade: ${grade}<br>`);
        document.write(`Remarks: ${remarks}`);
        document.write("</div>");
*/


// QUESTION-NO-07


/*
Guess game:
Store a secret number (ranging from 1 to 10) in a variable.
Prompt user to guess the secret number.
a. If user guesses the same number, show “Bingo! Correct
answer”.
b. If the guessed number +1 is the secret number, show
“Close enough to the correct answer”.
*/


/*
        // Store a secret number between 1 and 10
        const secretNumber = Math.floor(Math.random() * 10) + 1; // Generates a random number between 1 and 10

        // Prompt user to guess the secret number
        const userGuess = parseInt(prompt("Guess a number between 1 and 10:"));

        // Validate input
        if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
            document.write("Please enter a valid number between 1 and 10.");
        } else {
            // Check user's guess against the secret number
            if (userGuess === secretNumber) {
                document.write("Bingo! Correct answer.");
            } else if (userGuess + 1 === secretNumber || userGuess - 1 === secretNumber) {
                document.write("Close enough to the correct answer.");
            } else {
                document.write(`Sorry, the secret number was ${secretNumber}. Better luck next time!`);
            }
        }
*/


// QUESTION-NO-08


/*
Write a program to check whether the given number is
divisible by 3. Show the message to the user if the number
is divisible by 3.
*/

/*
        // Taking input from the user
        const number = parseInt(prompt("Enter a number:"));

        // Check if the number is valid
        if (isNaN(number)) {
            document.write("Please enter a valid number.");
        } else {
            // Check if the number is divisible by 3
            if (number % 3 === 0) {
                document.write(`${number} is divisible by 3.`);
            } else {
                document.write(`${number} is not divisible by 3.`);
            }
        }
*/


// QUESTION-NO-09


/*
Write a program that checks whether the given input is an
even number or an odd number.
*/

/*
        // Taking input from the user
        const number = parseInt(prompt("Enter a number:"));

        // Check if the number is valid
        if (isNaN(number)) {
            document.write("Please enter a valid number.");
        } else {
            // Check if the number is even or odd
            if (number % 2 === 0) {
                document.write(`${number} is an even number.`);
            } else {
                document.write(`${number} is an odd number.`);
            }
        }
*/


// QUESTION-NO-10


/*
Write a program that takes temperature as input and
shows a message based on following criteria
a. T > 40 then “It is too hot outside.”
b. T > 30 then “The Weather today is Normal.”
c. T > 20 then “Today’s Weather is cool.”
d. T > 10 then “OMG! Today’s weather is so Cool.”
*/

/*
        // Taking temperature input from the user
        const temperature = parseFloat(prompt("Enter the temperature in degrees Celsius:"));

        // Checking temperature and displaying appropriate message
        if (temperature > 40) {
            document.write("It is too hot outside.");
        } else if (temperature > 30) {
            document.write("The Weather today is Normal.");
        } else if (temperature > 20) {
            document.write("Today’s Weather is cool.");
        } else if (temperature > 10) {
            document.write("OMG! Today’s weather is so Cool.");
        } else {
            document.write("It’s quite cold outside.");
        }
*/


// QUESTION-NO-11


/*
Write a program to create a calculator for +,-,*, / & %
using if statements. Take the following input:
a. First number
b. Second number
c. Operation (+, -, *, /, %)
Compute & show the calculated result to user.
*/

/*
        // Taking first number input
        const firstNumber = parseFloat(prompt("Enter the first number:"));

        // Taking second number input
        const secondNumber = parseFloat(prompt("Enter the second number:"));

        // Taking operation input
        const operation = prompt("Enter the operation (+, -, *, /, %):");

        let result;

        // Using if statements to perform the appropriate calculation
        if (operation === "+") {
            result = firstNumber + secondNumber;
        } else if (operation === "-") {
            result = firstNumber - secondNumber;
        } else if (operation === "*") {
            result = firstNumber * secondNumber;
        } else if (operation === "/") {
            result = firstNumber / secondNumber;
        } else if (operation === "%") {
            result = firstNumber % secondNumber;
        } else {
            document.write("Invalid operation. Please enter one of the following: +, -, *, /, %.");
        }

        // Displaying the result
        if (result !== undefined) {
            document.write(`The result of ${firstNumber} ${operation} ${secondNumber} is: ${result}`);
        }
*/