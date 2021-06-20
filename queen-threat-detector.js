let whiteQueen = [0, 0];
let blackQueen = [5, 7];
// [y, x]

const generateBoard = (whiteq, blackq) => {
  const whiteQueenY = whiteq[0];
  const whiteQueenX = whiteq[1];
  const blackQueenY = blackq[0];
  const blackQueenX = blackq[1];
  result = [];

  for (let y = 0; y < 8; y++) {
    let arr1 = [];
    result.push(arr1);
    for (let x = 0; x < 8; x++) {
      switch (true) {
        case (x === whiteQueenX && y === whiteQueenY):
          arr1.push(1);
          break;
        case (x === blackQueenX && y === blackQueenY):
          arr1.push(1);
          break;
        default:
          arr1.push(0);
          break;
      }
    }
  }
  return result;
}

// find queen on board
// is queen threatened by other queen?
  // if yes, return true
// otherwise, return false

const queenThreat = generateBoard => {
  for (let y = 0; y < generateBoard.length; y++) {
    for (let x = 0; x < generateBoard[y].length; x++) {
      // console.log(generateBoard[y][x] === 1);
      generateBoard[y][x] === 1 ? console.log('queen found     = [', y, ',', x, ']') : console.log('queen not found = [',  y, ',', x, ']');
    };
  };

  
  result = true;
  return result;
};

let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

// expected output:
/*
[
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
]
false
*/
// ----------------------------------------------------
// LOGIC

/*

 X->  0  1  2  3  4  5  6  7 
  0  [1, 0, 0, 0, 0, 0, 0, 0]
  1  [0, 0, 0, 0, 0, 0, 0, 0]
  2  [0, 0, 0, 0, 0, 0, 0, 0]
  3  [0, 0, 0, 0, 0, 0, 0, 0]
  4  [0, 0, 0, 0, 0, 0, 0, 0]
  5  [0, 0, 0, 0, 0, 0, 0, 1]
  6  [0, 0, 0, 0, 0, 0, 0, 0]
  7  [0, 0, 0, 0, 0, 0, 0, 0]
  ^
  |
  Y

  [5, 7] === [y, x]
  x=j
  y=i

[y,x]
[0,0] whiteq can kill

whiteq[1] === x ?
all horizontal [0][0], [0][1], [0][2], [0][3], [0][4], [0][5], [0][6], [0][7]
whiteq[0] === y ?
all vertical   [0][0], [1][0], [2][0], [3][0], [4][0], [5][0], [6][0], [7][0]
whiteq[1] && whiteq[0] === 1 ?
all diagnol    [0][0], [1][1], [2][2], [3][3], [4][4], [5][5], [6][6], [7][7] 


false
*/