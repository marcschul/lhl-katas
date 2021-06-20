const squareCode = message => {
  let noSpaceArr = message.split(' ');
  let noSpaceStr = noSpaceArr.join('');
  let sqrt = Math.sqrt(noSpaceStr.length);
  let sqrtRound = Math.ceil(sqrt);
  let result = '';

  for (let i = 0; i < sqrtRound; i++) {
    counter = i;
    for (let j = 0; j < sqrtRound; j++ ) {
      noSpaceStr[counter] === undefined ? null : result = result + noSpaceStr[counter];
      counter = counter + sqrtRound;
    }
    result = result + ' '
  }
  return result;
};

// TEST CASE(S)
console.log(squareCode("chill out"));
// expected output: clu hlt io 
console.log(squareCode("feed the dog"));
// expected output: fto ehg ee dd 
console.log(squareCode("have a nice day"));
// expected output: hae and via ecy 
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));
// expected output: imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau