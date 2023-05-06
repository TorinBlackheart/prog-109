let factor = prompt("Enter Value from 0-10", 3); //Prompt user to input number
var table = parseInt(factor);             // Unit of table
var operator = 'addition'; // Type of calculation
var i = 1;                 // Set counter to 1
var msg = '<h2>Multiplication Table</h2>';              // Message
  // Do multiplication
  while (i < 11) {
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
    i++;
  }

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;