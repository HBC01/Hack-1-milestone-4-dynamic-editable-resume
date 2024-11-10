var form1 = document.getElementById("form");
var display = document.getElementById("display");
form1.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var Fname = document.getElementById("Fname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skill = document.getElementById("skill").value;
    var resumeHTML = "<h2><b>Editable Resume</b></h2> \n<h3>Personal Information</h3>\n<p><b>Name: </b><span contenteditable=\"true\">".concat(name, "</span></p>\n<p><b>F/Name: </b><span contenteditable=\"true\">").concat(Fname, "</span></p>\n<p><b>Email: </b><span contenteditable=\"true\">").concat(email, "</span></p>\n<p><b>Phone No: </b><span contenteditable=\"true\">").concat(phone, "</span></p>\n\n<h3>Education</h3>\n<p contenteditable=\"true\">").concat(education, "</p>\n<h3>Experience</h3>\n<p contenteditable=\"true\">").concat(experience, "</p>\n<h3>Skills </h3>\n<p contenteditable=\"true\">").concat(skill, "</p>\n");
    if (display) {
        display.innerHTML = resumeHTML;
    }
    else {
        console.error("The resume display is missing.");
    }
});