// question-01

/* Write a program that takes a positive integer from user &
display the following in your browser.
a. number
b. round off value of the number
c. floor value of the number
d. ceil value of the number */



/* let number = parseFloat(prompt("Enter a positive integer:"));
document.write(`<h2>Number: ${number}</h2>`);
document.write(`<p>Round off value: ${Math.round(number)}</p>`);
document.write(`<p>Floor value: ${Math.floor(number)}</p>`);
document.write(`<p>Ceil value: ${Math.ceil(number)}</p>`); */




// question-02

/* Write a program that takes a negative floating point
number from user & display the following in your browser.
a. number
b. round off value of the number
c. floor value of the number
d. ceil value of the number */



/* let number = parseFloat(prompt("Enter a negative floating-point number:"));
document.write(`<h2>Number: ${number}</h2>`);
document.write(`<p>Round off value: ${Math.round(number)}</p>`);
document.write(`<p>Floor value: ${Math.floor(number)}</p>`);
document.write(`<p>Ceil value: ${Math.ceil(number)}</p>`); */




// question-03

/* Write a program that displays the absolute value of a
number.
E.g. absolute value of -4 is 4 & absolute value of 5 is 5 */



/* let number = parseFloat(prompt("Enter a number:"));
document.write(`<h2>Absolute value: ${Math.abs(number)}</h2>`); */




// question-04

/* Write a program that simulates a dice using random()
method of JS Math class. Display the value of dice in your
browser */



/* let diceValue = Math.floor(Math.random() * 6) + 1;
document.write(`<h2>Dice Value: ${diceValue}</h2>`); */




// question-05

/* Write a program that simulates a coin toss using random()
method of JS Math class. Display the value of coin in your
browser */



/* let coinToss = Math.random() < 0.5 ? 'Heads' : 'Tails';
document.write(`<h2>Coin Toss Result: ${coinToss}</h2>`); */




// question-06

/* Write a program that shows a random number between 1
and 100 in your browser. */



/* let randomNumber = Math.floor(Math.random() * 100) + 1;
document.write(`<h2>Random Number between 1 and 100: ${randomNumber}</h2>`); */




// question-07

/* Write a program that asks the user about his weight. Parse
the user input and display his weight in your browser.
Possible user inputs can be:
a. 50
b. 50kgs
c. 50.2kgs
d. 50.2kilograms */



/* let weight = prompt("Enter your weight (e.g., '50', '50kgs', '50.2kgs', '50.2kilograms'):");
let parsedWeight = parseFloat(weight);
document.write(`<h2>Your weight is: ${parsedWeight} kg</h2>`); */




// question-08

/* Write a program that stores a random secret number from
1 to 10 in a variable. Ask the user to input a number
between 1 and 10. If the user input equals the secret
number, congratulate the user. */



/* let secretNumber = Math.floor(Math.random() * 10) + 1;
let userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

if (userGuess === secretNumber) {
document.write(`<h2>Congratulations! You guessed the secret number (${secretNumber}) correctly.</h2>`);
} else {
document.write(`<h2>Sorry, the secret number was ${secretNumber}. Better luck next time!<h2>`);
} */



