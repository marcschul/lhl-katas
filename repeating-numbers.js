const repeatNumbers = function(data) {
  let str = '';
  let j = 0;
  for (let arr of data) {
    let i = 0
    while (i < arr[1]) {
      str = str + arr[0] .toString();
      i++;
    }
    if (j < data.length -1) {
      str = str + ', '
    }
    j++;
  }
  return str;
};

console.log(repeatNumbers([[1, 10]]));
// expected output: 1111111111
console.log(repeatNumbers([[1, 2], [2, 3]]));
// expected output: 11, 222
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
// expected output: 10101010, 343434343434, 9292