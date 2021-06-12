// LOGIC
// ---- Conditions ----
// Regular cars can only park in R spots.
// Small cars can park in R or S spots.
// Motorcycles can park in R, S, or M spots.
// Upper-case = Available to park
// Lower-case = Unavailble to park
// Function returns [X,Y] coordinates
// Function returns false if no spots available

const whereCanIPark = (spots, vehicle) => {
  let parkingSpot = [];

  for (let y = 0; y < spots.length; y++) {
    for (let x = 0; x < spots[y].length; x++) {
      switch(vehicle) {
        case 'regular':
          spots[y][x] === 'R' ? parkingSpot.push([x, y]) : null;
          break;
        case 'small':
          (spots[y][x] === 'S' || spots[y][x] === 'R') ? parkingSpot.push([x, y]) : null;
          break;
        case 'motorcycle':
          (spots[y][x] === 'S' || spots[y][x] === 'R' || spots[y][x] === 'M') ? parkingSpot.push([x, y]) : null;
          break;
      }
    }
  }

  if (parkingSpot[0] === undefined) {
    return false;
  }

  return parkingSpot[0];
};

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));
// expected output: [4, 0]

console.log(whereCanIPark(
  [
    // 0   1    2     3   
    ['M', 'M', 'M', 'M'], // 0 ROWS ARE Y
    ['M', 's', 'M', 'M'], // 1
    ['M', 'M', 'M', 'M'], // 2
    ['M', 'M', 'r', 'M']  // 3
  ],
  'small'
));
// expected output: false

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0   1    2    3    4    5
    ['s', 's', 's', 's', 's', 's'], // 0 ROWS ARE Y
    ['s', 'm', 's', 'S', 'r', 's'], // 1
    ['s', 'm', 's', 'S', 'r', 's'], // 2
    ['S', 'r', 's', 'm', 'r', 's'], // 3
    ['S', 'r', 's', 'm', 'R', 's'], // 4
    ['S', 'r', 'S', 'M', 'm', 'S']  // 5
  ],
  'motorcycle'
))
// expected output: [3, 1]