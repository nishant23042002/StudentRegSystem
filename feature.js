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

//adding eventlistener to the button
registerBtn.addEventListener("click", addItem);


//creating function
function addItem(){
    //creating new div and class to it dynamically
    const divCreated = document.createElement("div");
    divCreated.classList.add("newDiv")
    
    // creating paragraph and adding class to it dynamically
    const userName = document.createElement("p");
    userName.classList.add("newPara")
    
    //getting the input from the user
    userName.innerHTML = inputName.value;
    
    //appending the para to the newly created div
    divCreated.appendChild(userName)
    
    //condition were it shouldn't add empty element
    if(inputName.value == '') return;
    
    // adding the content to the main div 
    studentRecord.appendChild(divCreated);
    
    // condition when user press button input gets empty
    inputName.value = '';
    
    

    //for student_id
    const userId = document.createElement("p");
    userId.classList.add("newPara");
    userId.innerHTML = inputId.value;
    divCreated.appendChild(userId);
    inputId.value = '';


    //for student_email
    const userEmail = document.createElement("p");
    userEmail.classList.add("newPara")
    userEmail.innerHTML = inputEmail.value;
    divCreated.appendChild(userEmail)
    inputEmail.value = '';


    const userContact = document.createElement("p");
    userContact.classList.add("newPara")
    userContact.innerHTML = inputContact.value;
    divCreated.appendChild(userContact)
    inputContact.value = '';
}