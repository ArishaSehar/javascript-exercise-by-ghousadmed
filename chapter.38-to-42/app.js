        //    [ QUESTION 1 ]
// Write a custom function power ( a, b ), to calculate the value of a raised to b.


/* function power(a,b){
    return a**b;
}
console.log(power(4,5)) */




            //  [ QUESTION 2 ]
/* Any year is entered through the keyboard. Write a function to
determine whether the year is a leap year or not. */


/* var year = prompt("enter any year")
switch(year){
    case "2020" :
        console.log("leap");
        break;

    case "2016" :
        console.log("leap");
        break;

    case "2012" :
        console.log("leap");
        break;

        default :
        console.log("not")
} */



    //    [ANOTHER METHOD]

/* function isLeapYear(year){
    if (year % 4 === 0){
        if(year % 100 !== 0 || year % 400 === 0){
            return true;
        }
    }
    return false;
}
console.log(isLeapYear(2020)); //true
console.log(isLeapYear(2016)); //true
console.log(isLeapYear(2012)); //true */




        // [ QUESTION 3 ]
/* If the lengths of the sides of a triangle are denoted by a, b, and
c, then area of triangle is given by
area = S(S − a)(S − b)(S − c)
where, S = ( a + b + c ) / 2
Calculate area of triangle using 2 functions */    



/* var a = +prompt("Enter the first side:");
var b = +prompt("Enter the second side:");
var c = +prompt("Enter the third side:");

function calculateSemiPerimeter(a, b, c) {
    var S = (a + b + c) / 2;
    return S;
}

var foundS = calculateSemiPerimeter(a, b, c);
console.log("Semi-perimeter: " + foundS);

function calculateArea(S, a, b, c) {
    var area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
    return area;
}

var result = calculateArea(foundS, a, b, c);
console.log("Area of the triangle: " + result); */



        //  [ QUESTION 4 ]

/* Write a function that receives marks received by a student in 3
subjects and returns the average and percentage of these
marks. there should be 3 functions one is the mainFunction
and other are for average and percentage. Call those functions
from mainFunction and display result in mainFunction. */


/* // Function to calculate the average of three marks
function calculateAverage(mark1, mark2, mark3) {
    return (mark1 + mark2 + mark3) / 3;
}

// Function to calculate the percentage based on total marks obtained and total possible marks
function calculatePercentage(totalMarksObtained, totalMarks) {
    return (totalMarksObtained / totalMarks) * 100;
}

// Main function to receive marks, call the other functions, and display the results
function mainFunction() {
    // Get the marks for three subjects from the user
    var mark1 = +prompt("Enter marks for subject 1:");
    var mark2 = +prompt("Enter marks for subject 2:");
    var mark3 = +prompt("Enter marks for subject 3:");
    
    // Calculate the average of the marks
    var average = calculateAverage(mark1, mark2, mark3);
    
    // Assuming each subject is out of 100 marks
    var totalMarks = 300; // Total possible marks
    var totalMarksObtained = mark1 + mark2 + mark3;
    
    // Calculate the percentage
    var percentage = calculatePercentage(totalMarksObtained, totalMarks, 100);
    
    // Display the results
    console.log("Average marks: " + average);
    console.log("Percentage: " + percentage + "%");
}

// Call the main function to execute the program
mainFunction(); */
