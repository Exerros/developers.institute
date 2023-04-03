// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).
// Do this Daily Challenge by yourself, without looking at the answers on the internet.
// *  
// * *  
// * * *  
// * * * *  
// * * * * *
// * * * * * *

let output = '' ;
for (let i = 0; i < 6; i++) {
  output += '* ';
  console.log(output);
}






for (let i = 1; i <= 6; i++) {
    let output = '';
    for (let x = 1; x <= i; x++) {
      output += '* ';
    }
    console.log(output);
  }
