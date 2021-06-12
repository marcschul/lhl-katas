const conditionalSum = (values, condition) => {
  let even = [];
  let odd = [];
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const arrayStr = JSON.stringify(values);


  for (const num of values) {
    num % 2 === 0 ? even.push(num) : odd.push(num);
  };

  if (arrayStr === '[]') {
    return 0;
  } else if (condition === 'even') {
    return even.reduce(reducer);
  } else if (condition === 'odd') {
    return odd.reduce(reducer);
  } else {
    return undefined;
  }
}

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));