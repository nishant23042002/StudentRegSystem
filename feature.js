const inputName = document.querySelector("#student_name");
const inputId = document.querySelector("#student_id");
const inputEmail = document.querySelector("#student_email");
const inputContact = document.querySelector("#student_contact_no")
const registerBtn = document.querySelector("#student_register");
const studentRecord = document.querySelector(".name");

//Loading existing data from local storage
document.addEventListener("DOMContentLoaded", loadData);

//adding eventlistener to the button
registerBtn.addEventListener("click", addItem);








function addItem() {
    //to check whether input fields are empty or not if empty will return nothing
    if (!inputName.value || !inputId.value || !inputEmail.value || !inputContact.value) {
        return;
    }
    //creating student object
    //Retreving values enter in input fields keys will store data in local storage later
    const student = {
        name: inputName.value,
        id: inputId.value,
        email: inputEmail.value,
        contact: inputContact.value
    };

    //adding student details to the local storage
    saveToLocalStorage(student)

    //displaying student details to the page
    displayStudent(student)

    //clearing the input fields
    inputName.value = '';
    inputId.value = '';
    inputEmail.value = '';
    inputContact.value = '';

}









function displayStudent(student) {
    //Creating and appending div para respectively
    //also they are editable fields
    const divCreated = document.createElement("div");
    divCreated.classList.add("newDiv")
    const userName = document.createElement("p");
    userName.classList.add("newPara")
    userName.innerHTML = student.name;

    //appending the para to the newly created div
    divCreated.appendChild(userName)

    const userId = document.createElement("p");
    userId.classList.add("newPara");
    userId.innerHTML = student.id;
    divCreated.appendChild(userId);

    const userEmail = document.createElement("p");
    userEmail.classList.add("newPara")
    userEmail.innerHTML = student.email;
    divCreated.appendChild(userEmail)

    const userContact = document.createElement("p");
    userContact.classList.add("newPara")
    userContact.innerHTML = student.contact;
    divCreated.appendChild(userContact)


    //Edit/Delete button
    const editButton = document.createElement("button");
    editButton.classList.add("btn")
    editButton.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>'
    divCreated.appendChild(editButton);
    editButton.addEventListener("click", ()=>editStudent(student, divCreated));

    const delButton = document.createElement("button");
    delButton.classList.add("btn2")
    delButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
    divCreated.appendChild(delButton)
    delButton.addEventListener("click", ()=>deleteItem(student, divCreated));

    // adding the content to the div we wanted it to be
    studentRecord.appendChild(divCreated);
}







// Edit/Delete functionality
function editStudent(student, divCreated){

    //current detail of the selected student 
    inputName.value = student.name;
    inputId.value = student.id;
    inputEmail.value = student.email;
    inputContact.value = student.contact;

    //deleting it temporarily and after edting is completed it will be visible with the edited content
    deleteItem(student, divCreated);
}

function deleteItem(student, divCreated){
    //Removing student data from DOM
    divCreated.remove();

    //Retriving data from local storage
    let students = JSON.parse(localStorage.getItem("students")) || [];

    //Filtering the students to delete
    students = students.filter(s => s.id !== student.id);

    //updating local storage and converting it into string
    localStorage.setItem("students", JSON.stringify(students))
}





function saveToLocalStorage(student) {
    //storing student details to browser local storage
    //JSON.parse method will convert string to an array and if data not exsist then null it will avoid throwing an error 
    let students = JSON.parse(localStorage.getItem("students")) || [];

    //adding new student object to exisiting array and push the student to end of that array
    students.push(student);

    //saved the updated student deatils to local storage after converting it to string
    localStorage.setItem("students", JSON.stringify(students));
}

function loadData() {
    //Retriving student data from local storage after converting string to a array with JSON.parse
    let students = JSON.parse(localStorage.getItem("students")) || [];

    //looping through each student and displaying it to dom
    students.forEach(student => {
        displayStudent(student);
    });
}
