// Instructions
// Prompt the user for several words (separated by commas).
// Put the words into an array.
// Console.log the words one per line, in a rectangular frame as seen below.
// Check out the Hints and Requirements below.
// For example, if the user gives you:
// Hello, World, in, a, frame
// you will transform it to : ["Hello", "World", "in", "a", "frame"]
// that will get displayed as:

// stars and words


let words = prompt("Enter several words separated by commas:").split(",");

let maxLength = 0;
for (let word of words) {
  if (word.length > maxLength) {
    maxLength = word.length;
  }
}



console.log("*".repeat(maxLength + 4));
for (let word of words) {
  console.log("* " + word.padEnd(maxLength, " ") + " *");
}
console.log("*".repeat(maxLength + 4));

