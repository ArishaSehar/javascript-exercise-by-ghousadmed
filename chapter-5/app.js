//question-1
/*Write a program that take two numbers & add them in a 
new variable. Show the result in your browser. */


/*var num1 = +prompt("enter the first num");
var num2 = +prompt("enter the second num");
var result = num1 + num2;

document.write(" sum of " + num1 + " and " +  num2 + " is " + result);*/




//question-2
/* Repeat task1 for subtraction, multiplication, division & 
modulus. */


/*subtraction
var num1 = +prompt("enter the first num");
var num2 = +prompt("enter the second num");
var result = num1 - num2;

document.write(" subtraction of " + num1 + " and " +  num2 + " is " + result);*/


/*multiplication
var num1 = +prompt("enter the first num");
var num2 = +prompt("enter the second num");
var result = num1 * num2;

document.write(" multiplication of " + num1 + " and " +  num2 + " is " + result);*/


/*division
var num1 = +prompt("enter the first num");
var num2 = +prompt("enter the second num");
var result = num1 / num2;

document.write(" division of " + num1 + " and " +  num2 + " is " + result);*/


/*module
var num1 = +prompt("enter the first num");
var num2 = +prompt("enter the second num");
var result = num1 % num2;

document.write(" module of " + num1 + " and " +  num2 + " is " + result);*/




//question-3
/*Do the following using JS Mathematic Expressions 
a. Declare a variable. 
b. Show the value of variable in your browser like “Value 
after variable declaration is: ??”. 
c. Initialize the variable with some number. 
d. Show the value of variable in your browser like “Initial 
value: 5”. 
e. Increment the variable. 
f. Show the value of variable in your browser like “Value 
after increment is: 6”. 
g. Add 7 to the variable. 
h. Show the value of variable in your browser like “Value after addition is: 13”. 
i. Decrement the variable. 
j. Show the value of variable in your browser like “Value 
after decrement is: 12”. 
k. Show the remainder after dividing the variable’s value 
by 3.  
l. Output : “The remainder is : 0”. */


/*var a;
document.write( "Value after variable declaration is:" + a );

var a = 5;
document.write("<br>Initial value:" + a);

++a;
document.write("<br>Value after increment is:" + a);

a = a + 7;
document.write("<br>Value after addition is:" + a);

--a;
document.write("<br>Value after decrement is:" + a);

a = a % 3;
document.write("<br> The remainder is : " + a);*/




//question-4
/*Cost of one movie ticket is 600 PKR. Write a script to 
store 
ticket price in a variable & calculate the cost of buying 5 
tickets 
to a movie. Example output: */

/*var ticketprice = 600;
var totalprice = ticketprice * 5;
document.write(" Price of " + 5 + " tickets of movie are " + totalprice);*/




//question-5
/*Write a script to display multiplication table of any 
number in your browser.  */

/*document.write("<h1> <q> Table of 4 </q> </h1> ");
document.write(" <h2> 4 x 1 = " + 4 * 1 + "<br> " + " 4 x 2 = " + 4 * 2+ "<br> " + " 4 x 3 = " + 4 * 3+ "<br> " + " 4 x 4 = " + 4 * 4+ "<br> " + " 4 x 5 = " + 4 * 5+ "<br> " + " 4 x 6 = " + 4 * 6+ "<br> " + " 4 x 7 = " + 4 * 7+ "<br> " + " 4 x 8 = " + 4 * 8+ "<br> "  + " 4 x 9 = " + 4 * 9+ "<br> " + " 4 x 10 = " + 4 * 10+ " </h2>")*/




//question-6
/*The Temperature Converter: It’s hot out! Let’s make a 
converter based on the steps here. 
a.  Store a Celsius temperature into a variable. 
b. Convert it to Fahrenheit & output “NNoC is NNoF”. 
c. Now store a Fahrenheit temperature into a variable. 
d. Convert it to Celsius & output “NNoF is NNoC”. */

/*var Celsius = 25;
var Fahrenheit = (Celsius * 9/5) + 32;
document.write("<h3>" + Celsius + "oC " + " is " + Fahrenheit + "oF ")

var Fahrenheit = 70;
var Celsius = (Fahrenheit - 32) * 5/9;
document.write("<br>" + Fahrenheit + "oF " + " is " + Celsius + "oC ")*/




//question-7
/*Write a program to implement checkout process of a 
shopping cart system for an e-commerce website. Store 
the following in variables 

a. Price of item 1 
b. Price of item 2 
c. Ordered quantity of item 1 
d. Ordered Quantity of item 2 
e. Shipping charges 
Compute the total cost & show the receipt in your browser.*/


/*var priceItem_1 = 2000;
var priceItem_2 = 3000;
var quantity_of_priceItem_1 = 2;
var quantity_of_priceItem_2 = 2;
var shippingCharges = 200;
var total = (priceItem_1 * 2) + (priceItem_2 * 2) + shippingCharges;

document.write("<h1> Shopping Cart </h1>")
document.write(" Price of item 1 is " + priceItem_1 );
document.write("<br> Price of item 2 is " + priceItem_2);
document.write("<br> Quantity of item 1 is " + quantity_of_priceItem_1);
document.write("<br> Quantity of item 2 is " + quantity_of_priceItem_2);
document.write("<br> Shipping Charges " + shippingCharges);
document.write("<br> Total Cost of your order is " + total);*/




//question-8
/*Store total marks & marks obtained by a student in 2 
variables. Compute the percentage & show the result in 
your browser*/


/*var total_marks = 800;
var obtained_marks = 750;
var result = (obtained_marks/total_marks) * 100;

document.write("<h4>Total marks are " + total_marks);
document.write(" Obtained marks are " + obtained_marks);
document.write(" Result " + result);*/





//question-9
/* Assume we have 10 US dollars & 25 Saudi Riyals. Write a 
script to convert the total currency to Pakistani Rupees. 
Perform all calculations in a single expression. 
(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee 
and 1 Saudi Riyal = 28 Pakistani Rupee) */


/*var usDollar_1 = 104.80;
var saudiRiyal_1 = 28;
var exchangeRate = (usDollar_1 * 10) + (saudiRiyal_1 * 25);

document.write(" We have 10 Dollars and 25 Riyals.")
document.write("<br> 1 US Dollar in PKR is: 104.80");
document.write("<br> 1 Saudi Riyal in PKR is: 28");
document.write("<br> Total Currency in PKR: " + exchangeRate);*/





//question-10
/*Write a program to initialize a variable with some 
number and do arithmetic in following sequence: 
a. Add 5 
b. Multiply by 10 
c. Divide the result by 2 
Perform all calculations in a single expression*/

/*var num = 10
var num = ( num + 10 ) * 10 / 2;
document.write(num);*/




//question-11
/*The Age Calculator: Forgot how old someone is? 
Calculate it! 
a. Store the current year in a variable. 
b. Store their birth year in a variable. 
c. Calculate their 2 possible ages based on the stored 
values. 
Output them to the screen like so: “They are either NN or NN 
years old */


/*var current_year = 2024;
var birth_year = 2002;
var age = current_year - birth_year;
document.write(" Age is " + age);*/





//question-12
/*The Geometrizer: Calculate properties of a circle. 
a. Store a radius into a variable.
Calculate the circumference based on the radius, and 
output “The circumference is NN”. 
(Hint : Circumference of a circle = 2 π r , π = 3.142) 
Calculate the area based on the radius, and output “The 
area is NN”. (Hint : Area of a circle = π r2, π = 3.142) */


/*var radius = 20;
var pi = 3.142;
var circumference = 2 * pi * radius;
var area = pi * radius * radius;

document.write("Radius is: " + radius);
document.write("<br>The circumference is: " + circumference);
document.write("<br>The area is: " + area);*/





//question-13
/*The Lifetime Supply Calculator: Ever wonder how 
much a “lifetime supply” of your favorite snack is? 
Wonder no more. 
a. Store your favorite snack into a variable 
b. Store your current age into a variable. 
c. Store a maximum age into a variable. 
d. Store an estimated amount per day (as a number). 
e. Calculate how many would you eat total for the rest of 
your life. 
Output the result to the screen like so: “You will need 
NNNN to last you until the ripe old age of NN”. */

/*var favorite_snack = "lays";
var current_age = 22;
var maximum_age = 60;
var estimated_amount_perDay = 3;
var total = (maximum_age - current_age) * estimated_amount_byDay;

document.write(" Favorite snack " + favorite_snack);
document.write(" Current age " + current_age);
document.write(" Maximum age " + maximum_age);
document.write(" estimated amount per day " + estimated_amount_perDay);
document.write(" You will need " + estimated_amount_perDay + " to last you until the ripe old age of " + maximum_age);*/