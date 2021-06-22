let prompt = require("prompt-sync")();

// code below (replace this example)
// let answer = prompt("Guess a number: ");
// console.log("You answered: " + answer);
// ---------------------------------------------
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let num = getRandomInt(100);
let guess = [];

let answer = prompt("Guess a number:  ");

switch (true) {
  case (answer > num):
    console.log('Too High!');
    guess.push(answer);
    break;
  case (answer < num):
    console.log('Too Low');
    guess.push(answer);
    break;
  case (answer === num.toString()):
    console.log('You got it!');
    guess.push(answer);
    break;
  default:
    console.log('Not a number!');
    break;
}

console.log(guess);