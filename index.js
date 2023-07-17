//let answer = prompt("Please enter your input to play the game \n Enter 1 for Rock \n Enter 2 for Paper \n Enter 3 for scissors ")

const getComputerChoice = () => {
  let values = ['Rock', 'Paper ', 'Scissors'];
  const randomValue = Math.floor(Math.random() * values.length);
  return console.log(values[randomValue]);
}

getComputerChoice();