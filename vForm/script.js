function validateForm(){
  document.getElementById("errorMessages").innerHTML = "";
  var isFNValid = validateNameField("FirstName", 20);
  var isLNValid = validateNameField("LastName", 50);
  var isEmailValid = validateEmail();
  var isPhoneValid = validatePhoneField();
  var isUsernameValid = validateNameField("Username", 12);
  var isPasswordValid = validateNameField("Password", 7);
  var isAddressValid = validateAddressField("Address");
  var isCityValid = validateAddressField("City");
  var isStateValid = validateDropDown("State");
  var isCountryValid = validateDropDown("Country");
  var isZipCodeValid = validateZipCode();
  return (isFNValid && isLNValid && isEmailValid && isPhoneValid && isUsernameValid && isPasswordValid && isAddressValid && isCityValid && isStateValid && isCountryValid && isZipCodeValid);
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

function validatePhoneField() {
  var validationError = document.getElementById("errorMessages").innerHTML;
  //1) Create variable
  var isValid = false;
  var validCharacters = /^[0-9]+$/;
  //2) read value from HTML
  var fieldValue = document.getElementById("Phone").value;

  //3) Do validation
  if (fieldValue === null || fieldValue === "" || fieldValue.length > 15 || !fieldValue.match(validCharacters) )
    validationError += "<p>Invalid phone number</p>";
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

function validateAddressField(fieldName){
  var validationError = document.getElementById("errorMessages").innerHTML;
  //1) Create variable
  var isValid = false;

  //2) read value from HTML
  var fieldValue = document.getElementById(fieldName).value;

  //3) Do validation
  if (fieldValue === "null" || fieldValue === "")
    validationError += "<p>The " + fieldName + " is required</p>";
  else
    isValid = true;

  //4) Send error message to HTML
  document.getElementById("errorMessages").innerHTML = validationError;

  //5) return status of each field
  return (isValid);

}

function validateDropDown(fieldName){
  var validationError = document.getElementById("errorMessages").innerHTML;
  //1) Create variable
  var isValid = false;

  //2) read value from HTML
  var fieldValue = document.getElementById(fieldName).value;

  //3) Do validation
  if (fieldValue === "000")
    validationError += "<p>You must select a " + fieldName +"</p>";
  else
    isValid = true;

  //4) Send error message to HTML
  document.getElementById("errorMessages").innerHTML = validationError;

  //5) return status of each field
  return (isValid);

}
function validateZipCode(){
  var validationError = document.getElementById("errorMessages").innerHTML;
  //1) Create variable
  var isValid = false;
  var country = document.getElementById("Country").value;
  var validCharacters = /^[0-9]+$/;
  //2) read value from HTML
  var fieldValue = document.getElementById("ZipCode").value;

  //3) Do validation
  if (country === "USA" && (fieldValue === "null" || fieldValue.length === 0 || fieldValue.length > 5 || !fieldValue.match(validCharacters)))
    validationError += "<p>You must provide a valid ZipCode that is between 1-5 digits</p>";
  else
    isValid = true;

  //4) Send error message to HTML
  document.getElementById("errorMessages").innerHTML = validationError;

  //5) return status of each field
  return (isValid);

}