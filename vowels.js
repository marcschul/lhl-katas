const numberOfVowels = data => {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    switch (data[i]) {
      case 'a':
        sum++;
        break;
      case 'e':
        sum++;
        break;
      case 'i':
        sum++;
        break;
      case 'o':
        sum++;
        break;
      case 'u':
        sum++;
        break;
      default:
        break;
    }
  }
  return sum;
}

console.log(numberOfVowels("orange")); // expected output: 3
console.log(numberOfVowels("lighthouse labs")); // expected output: 5
console.log(numberOfVowels("aeiou")); // expected output: 5