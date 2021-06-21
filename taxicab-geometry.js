const blocksAway = directions => {
  
  let movement = null;
  let obj = {};
  directions[0] === 'right' ? movement = 'north' : movement = 'east';
  result = {};

  for (let move of directions) {

    if (typeof move === 'string') {
      switch (true) {
        case (movement === 'north'):
          move === 'left' ? movement = 'west' : movement = 'east';
          break;
        case (movement === 'east'):
          move === 'left' ? movement = 'north' : movement = 'south';
          break;
        case (movement === 'west'):
          move === 'left' ? movement = 'south' : movement = 'north';
          break;
        case (movement === 'south'):
          move === 'left' ? movement = 'east' : movement = 'west';
          break;
      }
    }

    if (typeof move === 'number') {
      obj[movement] === undefined ? obj[movement] = move : obj[movement] = obj[movement] + move;
    }
  }

  result = obj;
  result.west === 0 ? null : result.east = result.east - [obj.west];
  delete result.west;
  result.south === 0 ? null : result.north = result.north - [obj.south];
  delete result.south;

  return result;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
// expected output: {east: 1, north: 3}
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
// expected output: {east: 3, north: 3}
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));
// expected output: {east: 0, north: 0}