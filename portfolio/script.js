function validateForm(){
  document.getElementById("errorMessages").innerHTML = "";
  var isNameValid = validateNameField("Name", 30);
  var isEmailValid = validateEmail();
  return(isNameValid && isEmailValid);
}
function validateNameField(fieldName, maxLength) {
  var validationError = document.getElementById("errorMessages").innerHTML;
  //1) Create variable
  var isValid = false;

  //2) read value from HTML
  var fieldValue = document.getElementById(fieldName).value;

  //3) Do validation
  if (fieldValue === "null" || fieldValue === "" || fieldValue.length > maxLength)
    validationError += "<p>The " + fieldName + " is required and cannot be greater than "+ maxLength +" characters</p>";
  else
    isValid = true;

  //4) Send error message to HTML
  document.getElementById("errorMessages").innerHTML = validationError;

  //5) return status of each field
  return (isValid);
}
function validateEmail(){
  var validationError = document.getElementById("errorMessages").innerHTML;
  //1) Create variable
  var isValid = false;
  var validCharacters = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/;
  //2) read value from HTML
  var fieldValue = document.getElementById("Email").value;

  //3) Do validation
  if (fieldValue === null || fieldValue === "" || !fieldValue.match(validCharacters) )
    validationError += "<p>Invalid Email</p>";
  else
    isValid = true;

  //4) Send error message to HTML
  document.getElementById("errorMessages").innerHTML = validationError;

  //5) return status of each field
  return (isValid);
}