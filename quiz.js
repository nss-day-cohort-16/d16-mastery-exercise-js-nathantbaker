// figure out how to print multiple lines

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
var heightElement = document.getElementById("height");
var characterElement = document.getElementById("character");

//Reference to Object elements
var height = inputObject.height;
var characer = inputObject.character;

// Error Messages
var alertMissingInput = "Sorry, please fill out both fields first.";
var alertNumber = "Sorry, please provide a number for the height.";
var alertCharacter = "Sorry, please provide a characer in the characer field.";

// Attached Event Listener to button
buttonElement.addEventListener("click", pushInputs);

function makeTree (treeHeight, treeCharacer) {
  // Set variable print stuff
  var toPrint = "";
  var charToPrint = "";
  var spaces = ["x", "x"];
  var spacesToPrint = spaces.join("");
  // Number of lines we're printing
  for (var i = 0; i < treeHeight; i++) {
    
    // Inject number of spaces equal to treeHeight - 1 in array above.
    for (var j = 0; j < treeHeight; j++) { 
      spaces.push("x");
    }

    // Add another character each time you go down
    charToPrint += treeCharacer;

    // Contatentate right amount of spaces + charaters
    toPrint = spacesToPrint += charToPrint;
    console.log(toPrint);
  }
}

// Function to push user inputs into object
function pushInputs() {
  if (characterElement.value == "" || heightElement.value == "") {
    alert(alertMissingInput);
    console.log("typeof!", height);
  // }
  // else if (typeof height === NaN) {
  //   alert(alertNumber);
  // }
  // else if (typeof characterElement.value !== "string") {
  //   alert(alertCharacter);
  } else {
    
    // Push the inputs
    character = characterElement.value;
    height = Number(heightElement.value); //pass height as number
    console.log("Height Input:", height);
    console.log("Character Input:", character);
    
    // Make the Tree
    makeTree(height, character);
  }
}

// Submit form if you press enter while in HEIGHT field. 
heightElement.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) { // 13 is key for enter key
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

// Here's what the pine tree should look like when you specify a height of 3, and use the asterisk character.

// ```js
//  *
// ***
//*****

// ```