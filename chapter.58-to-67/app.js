////////QUESTION-NO 01



/* // i. Get the element with id “main-content” and assign it to a variable
var mainContent = document.getElementById('main-content');

// ii. Display all child elements of “main-content” element
console.log('Child elements of #main-content:');
for (let i = 0; i < mainContent.children.length; i++) {
  console.log(mainContent.children[i]);
}

// iii. Get all elements of class “render” and show their innerHTML in the browser
var renderElements = document.getElementsByClassName('render');
console.log('Inner HTML of elements with class .render:');
for (let i = 0; i < renderElements.length; i++) {
  console.log(renderElements[i].innerHTML);
}

// iv. Fill input value whose element id is “first-name”
document.getElementById('first-name').value = "Alex";

// v. Repeat part iv for id “last-name” and “email”
document.getElementById('last-name').value = "Bank";

document.getElementById('email').value = "alexbank@example.com"; */


///////OUESTION-NO O2



// function manipulateDOM() {
//   // Task i: Get node type of element with id "form-content"
//   var formContent = document.getElementById("form-content");
//   console.log("Node type of 'form-content': " + formContent.nodeType);

//   // Task ii: Show node type of element with id "lastName" and its child node
//   var lastNameElement = document.getElementById("lastName");
//   console.log("Node type of 'lastName': " + lastNameElement.nodeType);
//   console.log("Node type of 'lastName' child: " + lastNameElement.firstChild.nodeType);

//   // Task iii: Update child node of element with id "lastName"
//   lastNameElement.textContent = "Last Name: Johnson";
//   console.log("Updated 'lastName' element content: " + lastNameElement.textContent);

//   // Task iv: Get first and last child of id "main-content"
//   var mainContent = document.getElementById("main-content");
//   var firstChild = mainContent.firstElementChild;
//   var lastChild = mainContent.lastElementChild;
//   console.log("First child of 'main-content':", firstChild);
//   console.log("Last child of 'main-content':", lastChild);

//   // Task v: Get next and previous siblings of id "lastName"
//   var nextSibling = lastNameElement.nextElementSibling;
//   var previousSibling = lastNameElement.previousElementSibling;
//   console.log("Next sibling of 'lastName':", nextSibling);
//   console.log("Previous sibling of 'lastName':", previousSibling);

//   // Task vi: Get parent node and node type of element with id "email"
//   var emailElement = document.getElementById("email");
//   var parentNode = emailElement.parentNode;
//   console.log("Parent node of 'email':", parentNode);
//   console.log("Node type of parent node: " + parentNode.nodeType);
// }