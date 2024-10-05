        //   [ QUESTION 01 ]


/* Create a signup form and display form data in your web
page on submission.  */

/* document.getElementById('signupForm').addEventListener('submit', function(event) {
        event.preventDefault();
    
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
    
        const outputDiv = document.getElementById('output');
        outputDiv.innerHTML = `
            <h3>Form Data:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Password:</strong> ${password}</p>
        `;
    }); */


//    [  QUESTION-NO-02 ]


/* Suppose in your webpage there is content area in which
you have entered your item details, but user can only see
some details on first look. When user clicks on “Read
more” button, full detail of that particular item will be
displayed. */


/* document.getElementById('readMoreBtn').addEventListener('click', function() {
        const dots = document.getElementById('dots');
        const moreText = document.getElementById('more');
        const btnText = document.getElementById('readMoreBtn');
    
        if (dots.style.display === 'none') {
            dots.style.display = 'inline';
            btnText.innerHTML = 'Read more';
            moreText.style.display = 'none';
        } else {
            dots.style.display = 'none';
            btnText.innerHTML = 'Read less';
            moreText.style.display = 'inline';
        }
    }); */
    

//     [QUESTION-NO-03]

/* document.getElementById('studentForm').addEventListener('submit', function (e) {
        e.preventDefault();
    
        // Get form values
        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        const email = document.getElementById('email').value;
    
        // Add a new row to the table
        addRow(name, age, email);
    
        // Clear the form
        document.getElementById('studentForm').reset();
    });
    
    let editRow = null; // Track the row being edited
    
    function addRow(name, age, email) {
        const table = document.querySelector('#studentTable tbody');
        const row = table.insertRow();
    
        row.innerHTML = `
            <td>${name}</td>
            <td>${age}</td>
            <td>${email}</td>
            <td>
                <button onclick="editStudent(this)">Edit</button>
                <button onclick="deleteStudent(this)">Delete</button>
            </td>
        `;
    }
    
    function deleteStudent(button) {
        // Remove the row of the button clicked
        const row = button.parentNode.parentNode;
        row.parentNode.removeChild(row);
    }
    
    function editStudent(button) {
        // Show the edit form
        document.getElementById('editFormContainer').classList.remove('hidden');
    
        // Get the row data
        editRow = button.parentNode.parentNode;
        const name = editRow.cells[0].innerText;
        const age = editRow.cells[1].innerText;
        const email = editRow.cells[2].innerText;
    
        // Fill the form with current row data
        document.getElementById('editName').value = name;
        document.getElementById('editAge').value = age;
        document.getElementById('editEmail').value = email;
    }
    
    document.getElementById('editForm').addEventListener('submit', function (e) {
        e.preventDefault();
    
        // Get the updated values from the form
        const name = document.getElementById('editName').value;
        const age = document.getElementById('editAge').value;
        const email = document.getElementById('editEmail').value;
    
        // Update the row with the new values
        editRow.cells[0].innerText = name;
        editRow.cells[1].innerText = age;
        editRow.cells[2].innerText = email;
    
        // Hide the edit form
        document.getElementById('editFormContainer').classList.add('hidden');
    
        // Clear the edit form
        document.getElementById('editForm').reset();
    }); */
    