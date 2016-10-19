// Create object to hold user inputs
var inputObject = {
  height: "",
  character: ""
};

// Reference to elements on page
var formElement = document.getElementById("form"); //to listen for field inputs
var heightElement = document.getElementById("height");
var characterElement = document.getElementById("character");
var buttonElement = document.getElementById("button");

// Error Messages
var alertMissingInput = "Please fill out both text fields.";
var alertOneChar = "Please only type 1 character into the character field.";
var alertNumber = "Please only type a number in the height field.";

// Attached event listener to button. If you click it, call PushInputs function
buttonElement.addEventListener("click", pushInputs);

// Submit form if you press enter while in a field.
formElement.addEventListener("keyup", function(event) {
    if (event.keyCode == 13) { // 13 is key for enter key
        pushInputs();
    }
});

// Function to push user inputs into object and check for errors
function pushInputs() {
  // Save new inputs
  inputObject.height = heightElement.value;
  inputObject.character = characterElement.value;
  // Error if either of new inputs are nothing
  if (inputObject.character == "" || inputObject.height == "") {
    alert(alertMissingInput);
  // Error if user types more than 1 character
  } else if (inputObject.character.length !== 1) {
    alert(alertOneChar);
  // Error if height input isn't a number. isNaN() returns true if string can't convert to a number
  } else if (isNaN(inputObject.height)) {
    alert(alertNumber);
  } else {
    makeTree(inputObject);
  }
}

// Function to draw tree in Console
function makeTree(treeObject) {
  var spacesString = "";
  var charactersString = "";
  var space = " ";

  // Set spaces in spacesString to height
  for (var j = 0; j < treeObject.height; j++) {
    spacesString += space;
  }

  // Number of lines we're printing
  for (var i = 0; i < treeObject.height; i++) {
    // Remove a space each line
    spacesString = spacesString.slice(0, -1);
    // Increase length of charactersString by 1 each time.
    charactersString += treeObject.character;
    console.log(spacesString + charactersString);
    // Increase length of characters by 1 each time AFTER console log
    charactersString += treeObject.character;
  }
}