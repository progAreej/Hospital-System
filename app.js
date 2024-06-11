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

    var arr = [
        "Full name" + fullName,
        "Password " + password,
        "Birthday " + birthday,
        "Gender " + gender,
        "Diseases " + diseases,
        "Phone " + phone
    ];

    let num = localStorage.length + 1;
    let patientKey = "Patient (" +num+')';
    localStorage.setItem(patientKey, JSON.stringify(arr));

    const patient = new DisplayPatients(fullName, password, birthday, gender, diseases, phone);
    localStorage.setItem(patientKey, JSON.stringify(patient));
    let output = document.getElementById("output");

    let card=document.createElement("div");
    output.appendChild(card);
    card.style.backgroundColor="#7774a8";
    card.style.color="white";
    card.style.width="300px";
    card.style.padding="20px";
    card.style.margin="20px";
    card.style.borderRadius="10px";
    card.style.fontSize="25px";
    card.style.fontFamily=" Arial, 'Helvetica Neue', Helvetica, sans-serif";
    
    card.innerHTML = 
    '<img src="./Patient.jpg" width="300px">'+"<br>"+
    "Full name is: " + patient.fullName+"<br>"+
    "Password is: " + patient.password+"<br>"+
    "Birthday is: " + patient.birthday+"<br>"+
    "Gender is: " + patient.gender+"<br>"+
    "Diseases is: " + patient.diseases+"<br>"+
    "Phone  is: " + patient.phone+"<br>";

    event.target.reset();
}
 