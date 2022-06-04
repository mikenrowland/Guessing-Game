console.log("-_-_-_-_-_-_-_-_-_-_-_-_-\n THE NUMBER GUESSING GAME \n_-_-_-_-_-_-_-_-_-_-_-_-_\n")
const input = prompt("Please enter your username:");
const username = input.charAt(0).toUpperCase() + input.slice(1);
var range = 2;
var score = 0;

// Function declaration for selecting a random number
const randomSelection = (r) => {
  let randomNum = Math.floor(Math.random()*r) + 1;
  return randomNum;
}

// Function declaration for receiving user input 
const userSelection = (r) => {
  var userInput = Number(prompt(`Select a number between 1 and ${r}:`));

  // Checking user input to ensure only integer values are accepted
  if (Number.isInteger(userInput) == false) {
    do {
      userInput = Number(prompt(`Digits only! Select a whole number between 1 and ${r}:`));
    } while (Number.isInteger(userInput) == false);
  }  
  return userInput;
}

// Declaration for the game function
function guessNumber() {
  console.log(`\n${username}, welcome to the number guessing game :)`);
  console.log("\n|==================== STAGE 1 ====================|\n");
  
  var selection = randomSelection(range);
  var userGuess = userSelection(range);
  
  // A loop to ensure a player keeps playing with each correct guess
  while (userGuess == selection) {
    console.log(`\n:) Correct guess! ${username}`)
    console.log(`\n|==================== STAGE ${range} ====================|\n`);
    score++;
    range++;
    userGuess = userSelection(range);
    selection = randomSelection(range)
}

  console.log(`\n:( Wrong guess! The correct answer is ${selection}.`);
  console.log(`\n|================== GAMEOVER!!! ==================|\n`)
  console.log(`${username} your score is ${score}.`);
}

// Game function call
guessNumber();