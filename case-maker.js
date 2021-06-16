const camelCase = input => {
  let arr = input.split(' ');
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    let up = '';
    switch (true) {
      case (JSON.stringify(arr[i]) === JSON.stringify(arr[0])):
        str = str + arr[i].toLowerCase();
        break;
      case (JSON.stringify(arr[i]) !== JSON.stringify(arr[0])):
        for (let j = 0; j < arr[i].length; j++) {
          arr[i][j] === arr[i][0] ? up = arr[i][0].toUpperCase() : up = up + arr[i][j];
        };
        str = str + up;
        break;
      default:
        break;
    }
  };
  return str;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));