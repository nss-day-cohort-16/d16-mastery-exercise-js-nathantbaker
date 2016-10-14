// Create a `tree` function that should build a pine tree out of a character in the Chrome dev tools console.

// Create object to hold user inputs
var inputObject = {
  height: "",
  character: ""
};

// Console logging starting values
console.log("Starting Height Input:", inputObject.height);
console.log("Starting Character Input:", inputObject.character);

// Reference to elements on page
var buttonElement = document.getElementById("button");
var characterElement = document.getElementById("character");
var heightElement = document.getElementById("height");

// Error Messages
var alertMissingInput = "Sorry, please fill out both fields first."
var alertNumber = "Sorry, please provide a number for the height."
var alertCharacter = "Sorry, please provide a characer in the characer field."

// Attached Event Listener to button
buttonElement.addEventListener("click", pushInputs);

// Function to push user inputs into object
function pushInputs() {
    // But only submit button if there are things in the fields
    if (characterElement.value != "" && heightElement.value != "") {
      inputObject.character = characterElement.value;
      inputObject.height = heightElement.value;
      console.log("Height Input:", inputObject.height);
      console.log("Character Input:", inputObject.character);
    } else {
      alert(alertMissingInput);
    }
}

// Submit form if you press enter while in HEIGHT field. 
heightElement.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) { //13 is referencing the enter key
        pushInputs();
    }
});

// Submit form if you press enter while in CHARACTER field
characterElement.addEventListener("keyup", function(event) {
    event.preventDefault();
    // But don't allow it if both fields don't have something
    if (event.keyCode == 13) {
        pushInputs();
    }
});


// ##### Example

// Here's what the pine tree should look like when you specify a height of 7, and use the asterisk character.

// ```js
//       *
//      ***
//     *****
//    *******
//   *********
//  ***********
// *************
// ```