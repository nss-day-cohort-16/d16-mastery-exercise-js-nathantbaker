
// Example

//  *
// ***
//*****

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
var heightElement = document.getElementById("height");
var formElement = document.getElementById("form"); //to listen for field inputs
var characterElement = document.getElementById("character");

console.log("buttonElement:", buttonElement);
console.log("heightElement:", heightElement);
console.log("characterElement:", characterElement);

// Reference to Object elements
var height = inputObject.height;
var characer = inputObject.character;

console.log("height:", height);
console.log("characer:", characer);

// Error Messages
var alertMissingInput = "Sorry, please fill out both fields first.";
var alertNumber = "Sorry, please provide a number for the height.";
var alertCharacter = "Sorry, please provide a characer in the characer field.";

// Attached Event Listener to button. If you click it, call PushInputs function
buttonElement.addEventListener("click", pushInputs);

// Submit form if you press enter while in a field. 
formElement.addEventListener("keyup", function(event) {
    if (event.keyCode == 13) { // 13 is key for enter key
        pushInputs();
    }
});

// Function to push user inputs into object
function pushInputs() {

  character = characterElement.value;
  height = Number(heightElement.value); //pass height as number
  console.log("Updated Height Input:", height);
  console.log("Updated Character Input:", character);
  
   // error message if both fields blank
  if (characterElement.value == "" || heightElement.value == "") {
    alert(alertMissingInput);
  // }
  // else if (height === NaN) {
  //   alert(alertNumber);
  } else {
    makeTree(height, character); // Make the Tree
  }
}

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
    // Increase length of characters by 1 each time.
    charactersString += treeCharacter;
    console.log("line " + (i + 1) + ":" + spacesString + charactersString);
    // Increase length of characters by 1 each time AFTER console log
    charactersString += treeCharacter;
  }
}