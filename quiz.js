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

// Store alert message
var alertMessage = "Sorry, please fill out both fields first."

// Attached Event Listener to button
buttonElement.addEventListener("click", pushInputs);

function pushInputs() {
    // Only submit button if there are things in the fields
    if (characterElement.value != "" && heightElement.value != "") {
      inputObject.character = characterElement.value;
      inputObject.height = heightElement.value;
      console.log("Height Input:", inputObject.height);
      console.log("Character Input:", inputObject.character);
    } else {
      alert(alertMessage);
    }
}



// Submit form if you press enter while in HEIGHT field. (13 is referencing the enter key)
heightElement.addEventListener("keyup", function(event) {
    event.preventDefault();
    // But don't allow it if both fields don't have something
    if (event.keyCode == 13 && (characterElement.value != "" && heightElement.value != "")) {
        document.getElementById("button").click();
    }
});

// Submit form if you press enter while in CHARACTER field (13 is referencing the enter key)
characterElement.addEventListener("keyup", function(event) {
    event.preventDefault();
    // But don't allow it if both fields don't have something
    if (event.keyCode == 13 && (characterElement.value != "" && heightElement.value != "")) {
        document.getElementById("button").click();
    }
});

// If either of the input fields does not have a value in it when the user presses the enter key, or presses the button, then display an alert stating that both fields must have a value.

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