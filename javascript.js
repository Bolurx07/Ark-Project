// function for Hamburger toggle
const hamburger = document.getElementById("hamburger");
hamburger.onclick = function () {
    navBar = document.querySelector(".navbar");
    navBar.classList.toggle("active")
}

// Form validation for Contactpage

const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');
const submitError = document.getElementById('submit-error');

function validateName(){
    const name = document.getElementById('name').value;

    if(name.length == 0 || name == ' '){
    nameError.innerHTML = 'Please fill in your name!!';
    return false;
    }

    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write your full-name!!';
        return false;
    }
    
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}



function validateEmail(){
    const email = document.getElementById('mail').value;

    if(email.length == 0){
        emailError.innerHTML = 'Email is required!!';
        return false;
    }

    if(!email.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Invalid Email!';
        return false;
    }

    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateMessage(){
    const message = document.getElementById('mesage').value;
    const required = 30;
    const left = required - message.length;


    if(left > 0){
        messageError.innerHTML = left + 'more characters required!!';
        return false;
    }

    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateForm(){
    if(!validateName() || !validateEmail() || !validateMessage() ){
        submitError.style.display = 'block'
        submitError.innerHTML = 'Please fill in the appropriate field';
        setTimeout(function(){submitError.style.display = 'none';}, 8000);
        return false;
    }
}