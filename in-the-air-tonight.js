const checkAir = (samples, threshold) => {
  let polluted = 0;

  for (let value of samples) {
    value === 'dirty' ? polluted++ : null; 
  } 
  return ((polluted / samples.length) < threshold ? 'clean' : 'polluted')
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
)); // expected output: polluted

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
)); // expected output: polluted

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
)) // expected output: clean
