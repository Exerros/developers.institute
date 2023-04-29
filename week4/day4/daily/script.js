// Prompt the user for a number to begin counting down bottles.

// In the song, everytime a bottle drops,
// the subtracted number should go up by 1.
// For example,

//     We start the song at 99 bottles
//     -> Take _1_ down, pass it around
//     -> we have now 98 bottles

//     -> then, Take _2_ down, pass them around
//     -> we have now 96 bottles

//     -> then, Take _3_ down, pass them around
//     -> we have now 93 bottles

//     ... ect


// 3. The song should end with “0 bottle of beer on the wall” or “no bottle of beer on the wall”.


// 4. Note : Make sure you get the grammar correct.

// For 1 bottle, you pass “it” around.
// For more than one bottle, you pass “them” around.


let numBottles = parseInt(prompt("How many bottles of beer are on the wall?"));

let bottlesToTake = 1;
while (numBottles > 0) {
  console.log(numBottles + " bottles of beer on the wall");
  console.log(numBottles + " bottles of beer");
  console.log("Take " + bottlesToTake + " down, pass " + (bottlesToTake > 1 ? "them" : "it") + " around");
  
  numBottles -= bottlesToTake;
  bottlesToTake++;
  if (bottlesToTake > numBottles) {
    bottlesToTake = numBottles;
  }

  if (numBottles > 0) {
    console.log(numBottles + " bottles of beer on the wall");
  } else {
    console.log("No more bottles of beer on the wall");
  }
}


