
console.log("hi");

// Create a `tree` function that should build a pine tree out of a character in the Chrome dev tools console.

// Create object to hold user inputs
var inputObject = {
  height: "",
  character: ""
};

console.log("Starting Height Input:", inputObject.height);
console.log("Starting Character Input:", inputObject.character);

// Reference to elements on page
var buttonElement = document.getElementById("button");
var characterElement = document.getElementById("character");
var heightElement = document.getElementById("height");

// Attached Event Listener to button
buttonElement.addEventListener("click", pushInputs);
function pushInputs() {
    inputObject.character = characterElement.value;
    inputObject.height = heightElement.value;
    console.log("Height Input:", inputObject.height);
    console.log("Character Input:", inputObject.character);
}

document.getElementById("height").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("button").click();
    }
});



// // If enter is pressed while in form field, submit form
// function (e) {
//   if (13 == e.keyCode) {
//      pushInputs();
//   }
// }

// Once the user enters in a number, and a character, the user can either then just press the enter key _(as long as the cursor is in one of the input fields)_, or click a button that is labeled "Grow your tree" and the tree should be shown in the console. This requires you to add an event listener to the button, as well as an event listener for the enter/return key.

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