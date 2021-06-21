// coordinates are valued as [y, x]
let whiteQueen = [0, 0];
let blackQueen = [5, 7];

// function returns visual board, 1 represents queen's position, 0 represents empty spot
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

// function returns boolen value, If queen is can be removed = true, if cannot be removed = false
const queenThreat = generateBoard => {
  let killArr = [];
 

  for (let y = 0; y < generateBoard.length; y++) {
    for (let x = 0; x < generateBoard[y].length; x++) {

      if (JSON.stringify([y, x]) === JSON.stringify(whiteQueen)) {
        // adds queen's coordinates
        killArr.push('queen');
        killArr.push([y, x]);
        // adds all queen's Y coordinates
        killArr.push('y direction');
        for (let k = 0; k < 8; k++) {
          JSON.stringify([k, x]) !== JSON.stringify([y, x]) ? killArr.push([k, x]) : null;
        }
        // adds all queen's X coordinates
        killArr.push('x direction');
        for (let q = 0; q < 8; q++) {
          JSON.stringify([y, q]) !== JSON.stringify([y, x]) ? killArr.push([y, q]) : null;
        }
        // adds all queen's YX coordinates
        killArr.push('yx direction');
          
        /*
        queen can move the following
        [y, x]
        +1, +1
        -1, +1
        +1, -1
        -1, -1
        x !== >7 || <0
        y !== >7 || <0
        */

        // +1, +1 direction
        killArr.push('+1, +1 direction');
        let xa = x;
        let ya = y;
        for (let ma = 0; ma < 8; ma++) {
          if (xa >= 0 && xa <= 7 && ya >= 0 && ya <= 7) {
            JSON.stringify([ya, xa]) !== JSON.stringify([y, x]) ? killArr.push([ya, xa]) : null;
            xa = xa + 1;
            ya = ya + 1;
          } 
        }

        // -1, -1 direction
        killArr.push('-1, -1 direction');
        let xb = x;
        let yb = y;
        for (let mb = 0; mb < 8; mb++) {
          if (xb >= 0 && xb <= 7 && yb >= 0 && yb <= 7) {
            JSON.stringify([yb, xb]) !== JSON.stringify([y, x]) ? killArr.push([yb, xb]) : null;
            xb = xb - 1;
            yb = yb - 1;
          } 
        }

        // -1, +1 direction
        killArr.push('-1, +1 direction');
        let xc = x;
        let yc = y;
        for (let mb = 0; mb < 8; mb++) {
          if (xc >= 0 && xc <= 7 && yc >= 0 && yc <= 7) {
           JSON.stringify([yc, xc]) !== JSON.stringify([y, x]) ? killArr.push([yc, xc]) : null;
           xc = xc + 1;
           yc = yc - 1;
          } 
        }

        // +1, -1 direction
        killArr.push('+1, -1 direction');
        let xd = x;
        let yd = y;
        for (let mb = 0; mb < 8; mb++) {
          if (xd >= 0 && xd <= 7 && yd >= 0 && yd <= 7) {
           JSON.stringify([yd, xd]) !== JSON.stringify([y, x]) ? killArr.push([yd, xd]) : null;
           xd = xd - 1;
           yd = yd + 1;
          } 
        }
      }
    };
  };

  result = false;

  for (let white of killArr) {
    JSON.stringify(white) === JSON.stringify(blackQueen) ? result = true : null;
  }

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