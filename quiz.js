// Create object to hold user inputs
var inputObject = {
  height: "",
  character: ""
};

// Reference to Object elements
var height = inputObject.height;
var characer = inputObject.character;

// Reference to elements on page
var formElement = document.getElementById("form"); //to listen for field inputs
var heightElement = document.getElementById("height");
var characterElement = document.getElementById("character");
var buttonElement = document.getElementById("button");

// Error Message
var alertMissingInput = "Sorry, please fill out both fields first.";

// Attached event listener to button. If you click it, call PushInputs function
buttonElement.addEventListener("click", pushInputs);

// Submit form if you press enter while in a field. 
formElement.addEventListener("keyup", function(event) {
    if (event.keyCode == 13) { // 13 is key for enter key
        pushInputs();
    }
});

// Function to push user inputs into object
function pushInputs() {
  // Save new inputs
  height = heightElement.value;
  character = characterElement.value;
  // Error if either of new inputs are nothing
  if (character == "" || height == "") {
    alert(alertMissingInput);
  } else {
    makeTree(height, character);
  }
}

// Function to draw tree in Console
function makeTree(treeHeight, treeCharacter) {
  var spacesString = "";
  var charactersString = "";
  var space = " ";

  // Set spaces in spacesString to height
  for (var j = 0; j < treeHeight; j++) {
    spacesString += space;
  }

  // Number of lines we're printing
  for (var i = 0; i < treeHeight; i++) {    
    // Remove a space each line
    spacesString = spacesString.slice(0, -1);
    // Increase length of charactersString by 1 each time.
    charactersString += treeCharacter;
    console.log(spacesString + charactersString);
    // Increase length of characters by 1 each time AFTER console log
    charactersString += treeCharacter;
  }
}