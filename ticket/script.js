// Event listener for form submission
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get values
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const gender = document.getElementById('gender').value;
    const concession = document.getElementById('concession').value;

    // Error spans
    const nameError = document.getElementById('nameError');
    const ageError = document.getElementById('ageError');
    const phoneError = document.getElementById('phoneError');
    const emailError = document.getElementById('emailError');
    const genderError = document.getElementById('genderError');
    const concessionError = document.getElementById('concessionError');

    let valid = true;
    // Name validation
   const namePattern = /^[A-Za-z\s]+$/;
    if(name === "") {
        nameError.textContent = "Name is required";
        valid = false;
    } else if(!namePattern.test(name)) {
        nameError.textContent = "Name must contain only letters";
        valid = false;
    } else {
        nameError.textContent = "";
    }

    // Age validation
    if(age === "" || age <= 0 || age > 120) {
        ageError.textContent = "Enter a valid age";
        valid = false;
    } else {
        ageError.textContent = "";
    }

    // Phone validation
    const phonePattern=/^[0-9]{10}$/;
    if(phone === "") {
        phoneError.textContent = "Phone number is required";
        valid = false;
    } else if(!phonePattern.test(phone))
        {
            phoneError.textContent = "Enter a valid 10-digit phone number";
            valid = false;
        }
    else {
        phoneError.textContent = "";
    }

    const emailPattern=/^[a-zA-Z0-9]+@[a-z0-9,-]+\.[a-z]{2,4}$/;
    if(email === ""){
        emailError.textContent="Email is required";
        valid = false;
    } else if(!emailPattern.test(email)){
        emailError.textContent="Enter a valid email address";
        valid = false;
    } else {
        emailError.textContent="";
    }

    // Gender validation
    if(gender === "") {
        genderError.textContent = "Select gender";
        valid = false;
    } else {
        genderError.textContent = "";
    }

    // Concession validation
    if(concession === "") {
        concessionError.textContent = "Select concession type";
        valid = false;
    } else {
        concessionError.textContent = "";
    }

    // If all validations pass
    if(valid) {
        alert(`Passenger Registered Successfully!\nName: ${name}\nAge: ${age}\nGender: ${gender}\nConcession: ${concession}`);
        document.getElementById('registrationForm').reset();
    }
});
