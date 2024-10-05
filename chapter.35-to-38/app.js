// question-1

/* Write a function that displays current date & time in your
browser. */


/*function myDate(){
    console.log(new Date())
       }
//   myDate()*/




// question-2

/* Write a function that takes first & last name and then it
greets the user using his full name. */


/*function greet(firstName, LastName) {
    console.log(firstName + " " + LastName + " how are you")
}
greet("arisha", "sehar")*/




// question-3

/* Write a function that adds two numbers (input by user)
and returns the sum of two numbers. */

/*function sum() {
    let num1 = Number(prompt("Enter first number"));
    let num2 = Number(prompt("Enter second number"));
    return num1 + num2
}
console.log(sum())*/





// question-4

/* Calculator:
Write a function that takes three arguments num1, num2
& operator & compute the desired operation. Return and
show the desired result in your browser. */


/*function calculator() {
    let num1 = Number(prompt("Enter first number"))
    let num2 = Number(prompt("Enter second number"))
    let operator = prompt("Enter operator", "+ - * /")
    let result;

    if (operator === "+") {
        result= num1 + num2
    }

    else if (operator === "-") {
        result= num1 - num2
    }

    else if (operator === "*") {
        result= num1 * num2
    }

    else if (operator === "-") {
        result= num1 - num2
    }
    else if (operator === "/") {
        if (num2 == 0) {
            result= "0 is not divisible by 0"
        }
        result= num1 / num2
    } else {
        result= "please enter a valid operator"
    }

    return num1 + operator + num2 + " = "+ result
}
alert(calculator())*/



//question-5

/* Write a function that squares its argument. */

// using prompt
/*function square() {
    let userInput = Number(prompt("enter a number for its square"))
    let squareValue = userInput * userInput
    return `the square of ${userInput} is ${squareValue}`
}

alert(square());*/


// pass arguments
/*function square(x) {
    let squareValue = x * x
    return `the square of ${x} and ${x} is ${squareValue}`
}

alert(square(8))*/




//qusetion-6

/* Write a function that computes factorial of a number. */


/*function factorial(){
let userInput = Number(prompt("enter a number"))
if(userInput<0){
alert(`Error: Factorial is not defined for negative numbers`)
}else{
    let result = 1;
    for(let i = 2; i<=userInput; i++){
        result*=i
    }
alert("The factorial of "+ userInput + " is "+result)
    
}
}
factorial()*/

// 1 *2 = 2
// 2 * 3 = 6
// 6 * 4 = 24
// 24 * 5 = 120




//question-7

/* Write a function that take start and end number as inputs
& display counting in your browser. */

// function counting(){
// let start = Number(prompt("enter number a number where you want to start counting"));
// let end = Number(prompt("enter number a number where you want to end counting"));
// let count;

// for(let i=start; i<=end; i++){
// count=i;
// console.log(count);
// }
// }
// counting();





//question-8

/* Write a nested function that computes hypotenuse of a
right angle triangle.
Hypotenuse2 = Base2 + Perpendicular2
Take base and perpendicular as inputs.
Outer function : calculateHypotenuse()
Inner function: calculateSquare() */

// function calculateHypotenuse(){
//   function calculateSquare(x){
//     return x * x
//   }

//   let base = Number(prompt("Enter the base of a right angle triangle"))
//   let perpendicular = Number(prompt("Enter the perpendicular of a right angle triangle"))
//   let sqr = calculateSquare(base) + calculateSquare(perpendicular);
//   let hypoteneuse = Math.sqrt(sqr);
//   alert(`hypotenuse 0f base:${base} and perpendicular:${perpendicular} is ${hypoteneuse}`)
//   return hypoteneuse;
// }
// console.log(calculateHypotenuse());





//question-9

/* Write a function that calculates the area of a rectangle.
 A = width * height
 Pass width and height in following manner:
i. Arguments as value
ii. Arguments as variables */


// function rectangle(width, height){
//     let areaarectangle = width*height
//     return `Area of rectangle is ${areaarectangle}`
// }
// console.log(rectangle(30, 60));


// let recWidth= 6;
// let recHeight = 12;
// function rectangle(width, height){
// return width*height
// }
// console.log(rectangle(recWidth,recHeight));





//question-10

/* Write a JavaScript function that checks whether a passed
string is palindrome or not?
A palindrome is word, phrase, or sequence that reads the same backward as
forward, e.g., madam. */

// function palindrome(){
// let userInput = prompt("Enter a word and checks it's palindrome or not")
// let arr = userInput.split("");
// let arrReverse = arr.reverse();
// let arrJoin = arrReverse.join("")
// if(userInput == arrJoin){
// return `${userInput} is a palindrome word`
// }else{
//     return `${userInput} is not a palindrome word`
// }
// }
// alert(palindrome())




//question-11

/* Write a JavaScript function that accepts a string as a
parameter and converts the first letter of each word of the
string in upper case.
EXAMPLE STRING : 'the quick brown fox'
EXPECTED OUTPUT : 'The Quick Brown Fox' */

/* function upperCase(){
    let word = "the quick brown fox"
    let strSplit = word.split(" ")
    for(let i=0; i<strSplit.length; i++){
        let firstChr = strSplit[i].charAt(0);
        let upperChr = firstChr.toUpperCase();
        let slc = strSplit[i].slice(1);
        let final = upperChr + slc
        strSplit[i]=final;
    }
   
console.log(strSplit.join(" "));
}

upperCase() */




// question-12

/* Write a JavaScript function that accepts a string as a
parameter and find the longest word within the string.
EXAMPLE STRING : 'Web Development Tutorial'
EXPECTED OUTPUT : 'Development */

/* function findLongestWord(str) {
    // Split the string into an array of words
    const words = str.split(' ');

    // Initialize a variable to store the longest word
    let longestWord = '';

    // Loop through the array and compare the length of each word
    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    // Return the longest word
    return longestWord;
}

// Example usage
const exampleString = 'Web Development Tutorial';
const longestWord = findLongestWord(exampleString);
console.log('Longest word:', longestWord); */




// question-13

/* Write a JavaScript function that accepts two arguments, a
string and a letter and the function will count the number of
occurrences of the specified letter within the string.
Sample arguments : 'JSResourceS.com', 'o'
 */


/* function countLetterOccurrences(str, letter) {
    // Initialize a counter to store the occurrences of the letter
    let count = 0;

    // Loop through the string and compare each character with the letter
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++; // Increment the counter if a match is found
        }
    }

    // Return the final count
    return count;
}

// Example usage
const exampleString = 'JSResourceS.com';
const letterToCount = 'o';
const count = countLetterOccurrences(exampleString, letterToCount);
console.log(`The letter '${letterToCount}' occurs ${count} times in the string.`);
 */




// question-14

/* The Geometrizer
Create 2 functions that calculate properties of a circle, using
the definitions here.
Create a function called calcCircumference:
• Pass the radius to the function.
• Calculate the circumference based on the radius, and output
"The circumference is NN".
Create a function called calcArea:
• Pass the radius to the function.
• Calculate the area based on the radius, and output "The area
is NN".
Circumference of circle = 2πr
Area of circle = πr2 */

/*
// Function to calculate the circumference of a circle
function calcCircumference(radius) {
    const circumference = 2 * Math.PI * radius;
    console.log(`The circumference is ${circumference.toFixed(2)}`);
}

// Function to calculate the area of a circle
function calcArea(radius) {
    const area = Math.PI * Math.pow(radius, 2);
    console.log(`The area is ${area.toFixed(2)}`);
}

// Example usage
const radius = 5;
calcCircumference(radius); // Output: The circumference is 31.42
calcArea(radius);          // Output: The area is 78.54
 */