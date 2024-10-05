// Date Methods



//question-1

/* Write a program that displays current date and time in
your browser. */

// var date = new Date();
// console.log(date)




//question-2

/* Write a program that alerts the current month in words.
For example December. */

// var date = new Date();
// var arrMon = ["January","February ", "March", "April", "May", "Junr", "July", "August", "September", "October", "November", "December"]
// var mon = date.getMonth()
// console.log(arrMon[mon])





//question-3

/* Write a program that alerts the first 3 letters of the current
day, for example if today is Sunday then alert will show
Sun. */

// var date = new Date();
// var arrDay = ["Sun","Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"]
// var day = date.getDay()
// console.log("Today is: " + arrDay[day])





//question-4

/* Write a program that displays a message “It’s Fun day” if
its Saturday or Sunday today. */

// var date = new Date();
// var arrDay = ["Sun","Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"]
// var day = date.getDay()
// if(day == 0 || day == 6){
//      console.log("Today is fun day")
// }else{
//      console.log("Today is working day")
// }





//question-5

/* Write a program that shows the message “First fifteen
days of the month” if the date is less than 16th of the month
else shows “Last days of the month”. */


// var date = new Date();
// var getDate = date.getDate()
// if(getDate<16){
//      alert("First Fifteen days of the month")
// }else{
//      alert("Last days of the month")
// }






//question-6

/* Write a program that determines the minutes since
midnight, Jan. 1, 1970 and assigns it to a variable that
hasn't been declared beforehand. Use any variable you like
to represent the Date object. */

// var date = new Date();
// var getSec = Date.now()
// var getMin = Math.floor(getSec / 1000 / 60)
// console.log("current date: "+ date)
// console.log("elapsed milliseconds since jan 1 1970: "+ getSec)
// console.log("elapsed minutes since jan 1 1970: " + getMin)






//question-7

/* Write a program that tests whether it's before noon and
alert “Its AM” else “its PM”. */

// var date = new Date();
// var getTime = date.getHours()

// if(getTime < 12){
//      alert("it's AM")
// }else{
//      alert("it's PM")
// }






//question-8

/* Write a program that creates a Date object for the last day
of the last month of 2020 and assigns it to variable named
laterDate. */

// var laterDate = new Date("Dec 31,2020");
// console.log(laterDate)





//question-9

/* Create a date object of the starting date of this Ramadan
and alert the number of days past since 1st Ramadan?
Note: 1st Ramadan was on June 18, 2015 */

// var ramdanDate = new Date("June 18,2015");
// var todayDate = new Date();

// var diff = todayDate - ramdanDate
// var final = Math.floor(diff / (1000*60*60*24))

// console.log(final + " days past since 1st ramzan 2015" )





//question-10

/* Write a program that displays in your browser the
seconds that elapsed between the reference date and the
beginning of 2015. */

// var referenceDate = new Date("Dec 5,2015");
// var beginDate = new Date("jan 1, 2015");

// var milliSec = referenceDate-beginDate

// var final = milliSec / 1000
// console.log("on refrence date " + referenceDate);
// console.log(final  + " has passed since beginning of 2015")





//question-11

/* Create a Date object for the current date and time.
Extract the hours, reset the date object an hour ahead and
finally display the date object in your browser. */

// var currentDate = new Date();
// console.log("current date and time is: " + currentDate);

// var getHour = currentDate.getHours();

// var sub = getHour - 1;

// currentDate.setHours(sub);
// console.log("1 hour before time is: " + currentDate);




//question-12

/* Write a program that creates a date object and show the
date in an alert box that is reset to 100 years back? */

// var currentDate = new Date();
// console.log("current date and time is: " + currentDate.toDateString());

// var getYear = currentDate.getFullYear();

// var sub = getYear-100

// currentDate.setFullYear(sub)

// console.log("100 years back it was: " + currentDate.toDateString())





//question-13

/* Write a program to ask the user about his age. Calculate
and show his birth year in your browser. */

// var userAge = Number(prompt("Enter your age"));
// var current = new Date();
// var CurrentYear = current.getFullYear();
// var calculate = CurrentYear-userAge
// console.log(`Your birth year is: ${calculate}`);




//question-14

/* Write a program to generate your K-Electric bill in your
browser. All the amounts should be rounded off to 2
decimal places. Display the following fields:
a. Customer Name
b. Current Month
c. Number of units
d. Charges per unit
e. Net Amount Payable (within Due Date)
f. Late Payment Surcharge
g. Gross Amount Payable (after Due Date)
Where,
Net Amount Payable (within Due Date) = Number of units * Charges per unit
& Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge */

// document.write("<h2>K-Electric Bill</h2>");
// var custumor = "Maryam";
// var month = "February";
// var unit = 410;
// var perUnit = 16;
// var netAmount = unit*perUnit;
// var lateAmount = 350;
// var grossAmount = netAmount + lateAmount;


// document.write(`Customer Name: <b>${custumor}</b> <br>`)
// document.write(`Month: <b>${month}</b> <br>`)
// document.write(`Number of units: <b>${unit}</b> <br>`)
// document.write(`Charges per unit: <b>${perUnit}</b> <br>`)
// document.write(`Net Amount payable (Within Due Date): <b>${netAmount}</b> <br>`)
// document.write(`Late payment surcharge: <b>${lateAmount}</b> <br>`)
// document.write(`Gross Amount payable (After Due Date): <b>${grossAmount}</b> <br>`)



