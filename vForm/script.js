function validateForm(){
    
}
function validateFNForm(){
    //1) Create variable
var validFirstname=false;
//2) read value from HTML
var firstname = document.getElementById("firstname").value;
//3) Do validation
if (firstname==="null" || firstname==="" || firstname.length > 20)
    errorMessages += "<p>The firstname is required and cannot be greater than 20 characters</p>";
else
   validFirstname = true;
//4) Send error message to HTML
document.getElementById("errorMessages").innerHTML = errorMessages;

//5) return status of each field
return (validFirstname);
    }
function validateLNForm(){
        //1) Create variable
var validLastname=false;
//2) read value from HTML
var Lastname = document.getElementById("lastname").value;
//3) Do validation
if (lastname==="null" || lastname==="" || lastname.length > 50)
    errorMessages += "<p>The lastname is required and cannot be greater than 20 characters</p>";
else
   validlastname = true;
//4) Send error message to HTML
document.getElementById("errorMessages").innerHTML = errorMessages;

//5) return status of each field
return (validlastname);
}
function validateEmail(){
    var userEmail = document.getElementById("email").value;
    var atpos = userEmail.indexOf("@");
    var dotpos = userEmail.lastIndexOf(".");
    if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=userEmail.length) {
        errorMessages = "<p>Invalid email</p>";
    }
    else{
        return true;
    }
}