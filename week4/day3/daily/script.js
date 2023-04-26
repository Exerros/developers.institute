function playTheGame() {
    const playGame = confirm("Would you like to play the game?");
    
    if (!playGame) {
      alert("No problem, Goodbye");
      return;
    }
    
    const userNumber = prompt("Please enter a number between 0 and 10");
    
    if (isNaN(userNumber)) {
      alert("Sorry Not a number, Goodbye");
      return;
    }
    
    if (userNumber < 0 || userNumber > 10) {
      alert("Sorry it's not a good number, Goodbye");
      return;
    }
    
    const computerNumber = Math.floor(Math.random() * 11);
    console.log(computerNumber);
    
    return compareNumbers(userNumber, computerNumber);
  }
  

  function compareNumbers(userNumber, computerNumber) {
    let numGuesses = 0;
  
    while (numGuesses < 3) {
      if (userNumber === computerNumber) {
        alert("WINNER!");
        return;
      } else if (userNumber > computerNumber) {
        userNumber = prompt("Your number is bigger than the computer's, guess again");
      } else {
        userNumber = prompt("Your number is smaller than the computer's, guess again");
      }
      numGuesses++;
    }
  
    alert("Out of chances!");
  }

  /// I can't figure out why it's not working
  
  
  