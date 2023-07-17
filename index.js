var playerPoints = 0;

/* Function to get computer's choice */
const getComputerChoice = () => {
  let values = ['Rock', 'Paper ', 'Scissors'];
  const randomValue = Math.floor(Math.random() * values.length);
  return values[randomValue];
}

/* Function to get the player's input */
const getPlayerChoice = () => {
  return prompt("Enter your selection to play Rock, Paper, Scissors");
}

const playRound = (playerSelection, computerSelection) => {

  let playerChoice = playerSelection.toLowerCase();
  let computerChoice = computerSelection.toLowerCase();

  if (playerChoice === computerChoice) {
    return console.log("It's a tie");
  }

  if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'scissors' && computerChoice === 'paper') ||
      (playerChoice === 'paper' && computerChoice === 'rock')
  ) {
    playerPoints++;
    return console.log(`You win : ), ${playerSelection} beats ${computerSelection}`);
  } else{
    return console.log(`You lose : ( , ${computerSelection} beats ${playerSelection}`)
  } 
}

const game = () => {
  for (i = 0; i < 5; i++){
    playRound(getPlayerChoice(), getComputerChoice());
  }
  if (playerPoints > 2) {
    console.log("You've won : )");
  } else if (playerPoints == 2) {
    console.log("That was a tie"); 
  }
  else {
    console.log("Sorry . . . you lost the game : (");
  }
}

game();

