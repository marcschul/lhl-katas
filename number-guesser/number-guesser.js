let prompt = require("prompt-sync")();

// code below (replace this example)

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let num = getRandomInt(100);
let guess = [];
let correct = null;
let numOfGuess = 0;

for (let i = 0; correct !== true; i++) {

  let answer = prompt("Guess a number:  ");
  switch (true) {
    case (answer > num):
      guess.includes(answer) ? null : guess.push(answer);
      console.log('Too High!');
      break;
    case (answer < num):
      guess.includes(answer) ? null : guess.push(answer);
      console.log('Too Low');
      break;
    case (answer === num.toString()):
      guess.includes(answer) ? null : guess.push(answer);
      console.log('You got it! You took ' + guess.length + ' attempt(s)!');
      correct = true;
      break;
    default:
      console.log('Not a number!');
      break;
  }
}