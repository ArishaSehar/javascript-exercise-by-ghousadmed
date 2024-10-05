////// QUESTION NO-01

/* Suppose You have an array of object 
var itemsArray = [
{name:”juice”,price:”50”, quantity:”3”},
{name:”cookie”,price:”30”, quantity:”9”},
{name:”shirt”,price:”880”, quantity:”1”},
{name:”pen”,price:”100”, quantity:”2”}];
Calculate total price of each item and all items; */

/* var itemsArray = [
{name: "juice",price: 50, quantity: 3},
{name: "cookie", price: 30, quantity: 9},
{name: "shirt", price: 880, quantity: 1},
{name: "pen", price: 100, quantity: 2} 
];

let totalPrice = 0;

itemsArray.forEach(item => {
    let itemTotal = item.price * item.quantity;
    console.log(`The total price of ${item.name}: ${itemTotal}`)
    totalPrice += itemTotal;
});
console.log(`Total price of all items are: ${totalPrice}`) */

    


//////// QUESTION NO-02

/* Create an object with properties name, email, password, age, 
gender, city, country.
Check if age and country properties exist in object or not.
Also check firstName and lastName properties in object. */

/* var user = {
    name: "areesha",
    email: "arshsehar66@gmail.com",
    password: 548785,
    age: 20,
    gender: "female",
    city: "karachi",
    country: "pakistan"
};
console.log('age' in user);
console.log('country' in user);
console.log('firstName' in user);
console.log('lastName' in user); */


/////// QUESTION N0-03

/* Create a constructor function with some properties. Now 
create multiple records using the constructor. */

/* function User(name, age, education, field, city, country){
  this.name = name;
  this.age = age;
  this.education = education;
  this.field = field;
  this.city = city;
  this.country = country;
}

let user1 = new User("areesha", 20, "undergraducate", "computer science", "karachi", "pakistan");
let user2 = new User("mahnoor", 20, "undergraducate", "geography", "karachi", "pakistan");
let user3 = new User("shahnoor", 20, "undergraducate", "computional mathematics", "karachi", "pakistan");

console.log(user1);
console.log(user2);
console.log(user3); */


/////// QUESTION NO-04


/* Suppose you want to check population of your area, their
educations and professions.
Create a constructor function which holds following 
properties:
Name, gender, address, education, profession, 
Enter all records one by one. 
Hint: 
 use select box for education and profession, 
 use radio box for gender
Bonus : use can use localStorage to save records. */


// Constructor function for storing records
/* function Person(name, gender, address, education, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
}

// Function to get the form data and create a new person
function savePerson(event) {
    event.preventDefault();

    // Get form values
    let name = document.getElementById('name').value;
    let address = document.getElementById('address').value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let education = document.getElementById('education').value;
    let profession = document.getElementById('profession').value;

    // Create new person using constructor
    let newPerson = new Person(name, gender, address, education, profession);

    // Get existing records from localStorage or create empty array
    let population = JSON.parse(localStorage.getItem('population')) || [];

    // Add the new person to the population array
    population.push(newPerson);

    // Save updated population array to localStorage
    localStorage.setItem('population', JSON.stringify(population));

    // Display updated records
    displayRecords();

    // Clear form after submission
    document.getElementById('populationForm').reset();
}

// Function to display records from localStorage
function displayRecords() {
    let recordsDiv = document.getElementById('records');
    let population = JSON.parse(localStorage.getItem('population')) || [];

    // Clear previous records
    recordsDiv.innerHTML = '';

    // Loop through each person and display their information
    population.forEach((person, index) => {
        recordsDiv.innerHTML += `
            <p><strong>Record ${index + 1}:</strong></p>
            <p>Name: ${person.name}</p>
            <p>Gender: ${person.gender}</p>
            <p>Address: ${person.address}</p>
            <p>Education: ${person.education}</p>
            <p>Profession: ${person.profession}</p>
            <hr>
        `;
    });
}

// Add event listener to the form to handle submission
document.getElementById('populationForm').addEventListener('submit', savePerson);

// Display records on page load
window.onload = displayRecords; */
