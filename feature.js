//Taking input of student name
const inputName = document.querySelector("#student_name");

//Taking input of student id
const inputId = document.querySelector("#student_id");

//Taking input of student email
const inputEmail = document.querySelector("#student_email");

//Taking input of student_phone no.
const inputContact = document.querySelector("#student_contact_no")
//register button clicked
const registerBtn = document.querySelector("#student_register");

//to place it should append the content
const studentRecord = document.querySelector(".name");

//Loading existing data from local storage
document.addEventListener("DOMContentLoaded", loadData);

//adding eventlistener to the button
registerBtn.addEventListener("click", addItem);


//creating function
function addItem() {
    if (!inputName.value || !inputId.value || !inputEmail.value || !inputContact.value) {
        alert("All fields are manditatory");
        return;
    }
    //creating student object
    const student = {
        name: inputName.value,
        id: inputId.value,
        email: inputEmail.value,
        contact: inputContact.value
    };

    //adding student details to the local storage
    saveToLocalStorage(student)

    displayStudent(student)

    //clearing the input fields
    inputName.value = '';
    inputId.value = '';
    inputEmail.value = '';
    inputContact.value = '';

}

function displayStudent(student) {
    //creating new div and class to it dynamically
    const divCreated = document.createElement("div");
    divCreated.classList.add("newDiv")
    // creating paragraph and adding class to it dynamically
    const userName = document.createElement("p");
    userName.classList.add("newPara")
    //getting the input from the user
    userName.innerHTML = student.name;

    //appending the para to the newly created div
    divCreated.appendChild(userName)

    //for student_id
    const userId = document.createElement("p");
    userId.classList.add("newPara");
    userId.innerHTML = student.id;
    divCreated.appendChild(userId);
    // inputId.value = '';


    //for student_email
    const userEmail = document.createElement("p");
    userEmail.classList.add("newPara")
    userEmail.innerHTML = student.email;
    divCreated.appendChild(userEmail)
    // inputEmail.value = '';


    const userContact = document.createElement("p");
    userContact.classList.add("newPara")
    userContact.innerHTML = student.contact;
    divCreated.appendChild(userContact)
    // inputContact.value = '';
    // adding the content to the main div 
    studentRecord.appendChild(divCreated);
}

function saveToLocalStorage(student) {
    let students = JSON.parse(localStorage.getItem("students")) || [];
    students.push(student);
    localStorage.setItem("students", JSON.stringify(students));
}

function loadData() {
    let students = JSON.parse(localStorage.getItem("students")) || [];
    students.forEach(student => {
        displayStudent(student);
    });
}
