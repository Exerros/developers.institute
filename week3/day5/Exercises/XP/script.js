// 🌟 Exercise 1 : List Of People
// Instructions
// const people = ["Greg", "Mary", "Devon", "James"];
// Part I - Review About Arrays
// Write code to remove “Greg” from the people array.
// Write code to replace “James” to “Jason”.
// Write code to add your name to the end of the people array.
// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
// Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method
// Write code that gives the index of “Foo”. Why does it return -1 ?
// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?
// Part II - Loops
// Using a loop, iterate through the people array and console.log each person.
// Using a loop, iterate through the people array and exit the loop after you console.log “Jason” .
// Hint: take a look at the break statement in the lesson.


const people = ["Greg", "Mary", "Devon", "James"];

people.shift();

people[2] = "Jason";

people.push("Daniel");
// console.log(people);

console.log(people.indexOf("Mary"));

const newPeople = people.slice(1, 3);
// console.log(newPeople);

console.log(people.indexOf("Foo"));  // The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

const last = people[people.length - 1];
// console.log(last);


for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
  }
  

  for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Jason") {
      break;
    }
  }  



//   🌟 Exercise 2 : Your Favorite Colors
// Instructions
// Create an array called colors where the value is a list of your five favorite colors.
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus

const colors = ["blue", "red", "black", "white", "orange"];
for (let i = 0; i < colors.length; i++) {
  console.log(`My #${i+1} choice is ${colors[i]}`);
}





// 🌟 Exercise 3 : Repeat The Question
// Instructions
// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?

let num = prompt("Please enter a number:");
console.log(`data type is ${typeof num}`);
while (num < 10) {
  num = prompt("Please enter a number greater than or equal to 10:");
// console.log(num)
}





