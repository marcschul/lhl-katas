const sumLargestNumbers = function(data) {
  const num1 = Math.max(...data);
  data.splice(data.indexOf(num1));
  const num2 = Math.max(...data);
  return num1 + num2;
}

console.log(sumLargestNumbers([1, 10])); // expect output: 11
console.log(sumLargestNumbers([1, 2, 3])); // expect output: 5
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2])); // expect output: 126