function DisplayPatients(fullName, password, birthday, gender, diseases, phone) {
    this.fullName = fullName;
    this.password = password;
    this.birthday = birthday;
    this.gender = gender;
    this.diseases = diseases;
    this.phone = phone;
}

function render(event) {
    event.preventDefault();

    let fullName = document.getElementById("fullName").value.trim();
    let password = document.getElementById("password").value;
    let birthday = document.getElementById("birthday").value;
    let gender = document.getElementById("gender").value;
    let diseases = document.getElementById("diseases").value;
    let phone = document.getElementById("phone").value;

    // Full Name validation
    let fullNameInput = document.getElementById("fullName");
    let fullNameRe = /\s/;
    let fullNameHasSpace = fullNameRe.test(fullName);
    let fullNameWarning = document.querySelector("#fullName + p");

    if (fullNameWarning) {
        fullNameWarning.remove();
    }

    if (fullNameHasSpace) {
        let par = document.createElement("p");
        par.innerHTML = "Full name should not contain white spaces ✘";
        par.style.color = "red";
        fullNameInput.insertAdjacentElement("afterend", par);
        return;
    }

    // Password validation
    let passwordInput = document.getElementById("password");
    let passwordRe = /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    let passwordIsValid = passwordRe.test(password);
    let passwordWarning = document.querySelector("#password + p");

    if (passwordWarning) {
        passwordWarning.remove();
    }

    if (!passwordIsValid) {
        let par = document.createElement("p");
        par.innerHTML = "Password must contain at least 8 characters, including uppercase, number, and special character ✘";
        par.style.color = "red";
        passwordInput.insertAdjacentElement("afterend", par);
        return;
    }

    // Phone validation
    let phoneInput = document.getElementById("phone");
    let phoneRe = /^07\d{8}$/;
    let phoneIsValid = phoneRe.test(phone);
    let phoneWarning = document.querySelector("#phone + p");

    if (phoneWarning) {
        phoneWarning.remove();
    }

    if (!phoneIsValid) {
        let par = document.createElement("p");
        par.innerHTML = "Phone number must start with 07 and be 10 digits long ✘";
        par.style.color = "red";
        phoneInput.insertAdjacentElement("afterend", par);
        return;
    }

    // Save patient data to localStorage
    let num = localStorage.length + 1;
    let patientKey = "Patient (" + num + ")";
    let patientData = new DisplayPatients(fullName, password, birthday, gender, diseases, phone);
    localStorage.setItem(patientKey, JSON.stringify(patientData));
    let retrievedPatientData = JSON.parse(localStorage.getItem(patientKey));
    const patient = new DisplayPatients(
        retrievedPatientData.fullName,
        retrievedPatientData.password,
        retrievedPatientData.birthday,
        retrievedPatientData.gender,
        retrievedPatientData.diseases,
        retrievedPatientData.phone
    );

    console.log(patient);

    // Display patient data
    let output = document.getElementById("output");
    let card = document.createElement("div");
    output.appendChild(card);
    card.style.backgroundColor = "#7774a8";
    card.style.color = "white";
    card.style.width = "300px";
    card.style.padding = "20px";
    card.style.margin = "20px";
    card.style.borderRadius = "10px";
    card.style.fontSize = "20px";
    card.style.fontFamily = "Arial, 'Helvetica Neue', Helvetica, sans-serif";

    card.innerHTML =
        '<img src="./Patient.jpg" width="300px" style="border-radius: 10px;">' + "<br>" + "<br>" +
        "Full name: " + patient.fullName + "<br>" +
        "Password: " + patient.password + "<br>" +
        "Birthday: " + patient.birthday + "<br>" +
        "Gender: " + patient.gender + "<br>" +
        "Diseases: " + patient.diseases + "<br>" +
        "Phone: " + patient.phone + "<br>";

    // Reset the form after successful validation and submission
    event.target.reset();
}

document.getElementById("form").addEventListener("submit", render);
