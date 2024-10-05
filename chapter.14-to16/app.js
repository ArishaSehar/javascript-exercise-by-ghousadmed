// QUESTION-N0-01

/*
Declare an empty array using JS literal notation to store
student names in future.
 */


// let studentNames = [];


// QUESTION-N0-02

/*
Declare an empty array using JS object notation to store
student names in future.
 */


// let studentNames = new Array();



// QUESTION-N0-03

/*
Declare and initialize a strings array.
 */


// let stringsArray = ["John", "Mary", "Alice", "Bob"];



// QUESTION-N0-04

/*
Declare and initialize a numbers array.
 */


// let numbersArray = [10, 20, 30, 40, 50];



// QUESTION-N0-05

/*
Declare and initialize a boolean array.
 */


// let booleanArray = [true, false, true, false];



// QUESTION-N0-06

/*
Declare and initialize a mixed array.
 */


// let mixedArray = ["John", 25, true, "Alice", false, 45];



// QUESTION-N0-07

/*
Declare and Initialize an array and store available
education qualifications in Pakistan (e.g. SSC, HSC, BCS,
BS, BCOM, MS, M. Phil., PhD). Show the listed
qualifications in your browser like:
 */

/*
        // Array of qualifications
        let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
        
        // Display qualifications in the browser
        document.write("<ul>");
        for (let i = 0; i < qualifications.length; i++) {
            document.write(`<li>${qualifications[i]}</li>`);
        }
        document.write("</ul>");
*/


// QUESTION-N0-08

/*
Write a program to store 3 student names in an array.Take
another array to store score of these three students.
Assume that total marks are 500 for each student, display
the scores & percentages of students like:
 */


/*
// Arrays to store student names and scores
let studentNames = ["John", "Mary", "Alice"];
let studentScores = [400, 450, 390]; // Scores of the students
const totalMarks = 500; // Total marks for each student

// Display student names, scores, and percentages
for (let i = 0; i < studentNames.length; i++) {
let percentage = (studentScores[i] / totalMarks) * 100;
document.write(`<p>${studentNames[i]} scored ${studentScores[i]} out of ${totalMarks}. Percentage: ${percentage.toFixed(2)}%</p>`);
}
*/


// QUESTION-N0-09

/*
. Initialize an array with color names. Display the array
elements in your browser.
a. Ask the user what color he/she wants to add to the
beginning & add that color to the beginning of the array.
Display the updated array in your browser.
b. Ask the user what color he/she wants to add to the end
& add that color to the end of the array. Display the
updated array in your browser.
c. Add two more color to the beginning of the array.
Display the updated array in your browser.
d. Delete the first color in the array. Display the updated
array in your browser.
e. Delete the last color in the array. Display the updated
array in your browser.
f. Ask the user at which index he/she wants to add a color
& color name. Then add the color to desired
position/index. . Display the updated array in your
browser.
g. Ask the user at which index he/she wants to delete
color(s) & how many colors he/she wants to delete. Then
Arrays | JAVASCRIPT
Page 3 of 6
remove the same number of color(s) from user-defined
position/index. . Display the updated array in your
browser.
 */


/*
// Initialize an array with color names
let colors = ["Red", "Green", "Blue", "Yellow"];
document.write("<h3>Initial Colors: </h3>");
document.write(colors.join(", ") + "<br><br>");

// a. Ask the user what color to add to the beginning
let colorAtBeginning = prompt("What color would you like to add to the beginning?");
colors.unshift(colorAtBeginning); // Add to the beginning
document.write("<h3>After adding color to the beginning: </h3>");
document.write(colors.join(", ") + "<br><br>");

// b. Ask the user what color to add to the end
let colorAtEnd = prompt("What color would you like to add to the end?");
colors.push(colorAtEnd); // Add to the end
document.write("<h3>After adding color to the end: </h3>");
document.write(colors.join(", ") + "<br><br>");

// c. Add two more colors to the beginning
colors.unshift("Purple", "Orange"); // Add two more colors
document.write("<h3>After adding two colors to the beginning: </h3>");
document.write(colors.join(", ") + "<br><br>");

// d. Delete the first color
colors.shift(); // Remove the first color
document.write("<h3>After deleting the first color: </h3>");
document.write(colors.join(", ") + "<br><br>");

// e. Delete the last color
colors.pop(); // Remove the last color
document.write("<h3>After deleting the last color: </h3>");
document.write(colors.join(", ") + "<br><br>");

// f. Ask the user at which index he/she wants to add a color
let indexToAdd = prompt("At which index would you like to add a color?");
let colorToAdd = prompt("Which color would you like to add?");
colors.splice(indexToAdd, 0, colorToAdd); // Add color at the specified index
document.write("<h3>After adding color at index " + indexToAdd + ": </h3>");
document.write(colors.join(", ") + "<br><br>");

// g. Ask the user at which index to delete color(s) and how many colors to delete
let indexToDelete = prompt("At which index would you like to delete color(s)?");
let numberOfColorsToDelete = prompt("How many colors would you like to delete?");
colors.splice(indexToDelete, numberOfColorsToDelete); // Remove color(s) from the specified index
document.write("<h3>After deleting color(s): </h3>");
 document.write(colors.join(", ") + "<br><br>");
*/


// QUESTION-N0-10

/*
Write a program to store student scores in an array &
sort the array in ascending order using Array’s sort
method.
 */


/*
// Array of student scores
let studentScores = [78, 85, 92, 65, 88];
document.write("<h3>Original Scores: </h3>" + studentScores.join(", ") + "<br><br>");

// Sort the array in ascending order
studentScores.sort(function(a, b) { return a - b; }); // Ascending order sort

// Display sorted scores
document.write("<h3>Sorted Scores: </h3>" + studentScores.join(", "));
*/


// QUESTION-N0-11

/*
Write a program to initialize an array with city names.
Copy 3 array elements from cities array to selectedCities
array.
 */


/*
// Initialize an array with city names
let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

// Copy 3 elements from cities array to selectedCities array
let selectedCities = cities.slice(1, 4); // Copies elements from index 1 to 3

// Display both arrays
document.write("<h3>All Cities: </h3>" + cities.join(", ") + "<br><br>");
document.write("<h3>Selected Cities: </h3>" + selectedCities.join(", "));
*/


// QUESTION-N0-12

/*
Write a program to create a single string from the
below mentioned array:
var arr = [“This ”, “ is ”, “ my ”, “ cat”];
(Use array’s join method)
 */


/*
// Array with words
let arr = ["This", " is", " my", " cat"];

// Create a single string using join method
let joinedString = arr.join(""); // Joins array elements with no separator

// Display the joined string
document.write("<h3>Joined String: </h3>" + joinedString);
*/


// QUESTION-N0-13

/*
Create a new array. Store values one by one in such a way
that you can access the values in the order in which they
were stored. (FIFO-First In First Out)
 */


/*
// Create a new array to store values
let fifoArray = [];

// Function to add values to the FIFO array
function addValue(value) {
fifoArray.push(value); // Add value to the end of the array
document.write("Added: " + value + "<br>");
}

// Function to remove and display the first value
function removeValue() {
if (fifoArray.length > 0) {
let removedValue = fifoArray.shift(); // Remove value from the beginning
document.write("Removed: " + removedValue + "<br>");
    }
else {
document.write("The array is empty.<br>");
   }
}

// Adding values to the FIFO array
addValue("Apple");
addValue("Banana");
addValue("Cherry");

// Display the current state of the FIFO array
document.write("<h3>Current FIFO Array: </h3>" + fifoArray.join(", ") + "<br><br>");

// Removing values from the FIFO array
removeValue(); // Should remove "Apple"
removeValue(); // Should remove "Banana"

// Final state of the FIFO array
document.write("<h3>Final FIFO Array: </h3>" + fifoArray.join(", "));
*/

