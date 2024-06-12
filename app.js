document.getElementById("form").addEventListener("submit", render);

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

    let fullName = document.getElementById("fullName").value;
    let password = document.getElementById("password").value;
    let birthday = document.getElementById("birthday").value;
    let gender = document.getElementById("gender").value;
    let diseases = document.getElementById("diseases").value;
    let phone = document.getElementById("phone").value;

    let num = localStorage.length + 1;
    let patientKey = "Patient ("+ num+")";
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

    event.target.reset();
}