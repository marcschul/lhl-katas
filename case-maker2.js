/*
Precedence of each of the casing styles are as follows, 
values higher in the list should be processed first:

1. camel, pascal, snake, kebab, title
2. vowel, consonant
3. upper, lower
*/

const makeCase = (input, styles) => {
  let strArr = [];
  typeof styles === 'string' ?  strArr.push(styles) : strArr = strArr.concat(styles);
  let result = '';

  for (let value of strArr) {
    switch (true) {
      case (value === 'camel'):
        result = camelCase(input);
        break;
      case (value === 'pascal'):
        result = pascal(input);
        break;
      case (value === 'snake'):
        result = snake(input);
        break;
      case (value === 'kebab'):
        result = kebab(input);
        break;
      case (value === 'title'):
        result = title(input);
        break;
      default:
        break;
    }
  }

  for (let value of strArr) {
    switch (true) {
      case (value === 'vowel'):
        result === '' ? result = vowel(input) : result = vowel(result);
        break;
      case (value === 'consonant'):
        result === '' ? result = consonant(input) : result = consonant(result);
        break;
      default:
        break;
    }
  }

  for (let value of strArr) {
    switch (true) {
      case (value === 'upper'):
        result === '' ? result = upper(input) : result = upper(result);
        break;
      case (value === 'lower'):
        result === '' ? result = lower(input) : result = lower(result);
        break;
      default:
        break;
    }
  }

  return result;
}


const camelCase = string => {
  let lowerString = string.toLowerCase();
  let arr = lowerString.split(' ');
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

const pascal = string => {
  let lowerString = string.toLowerCase();
  let arr = lowerString.split(' ');
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    let up = '';
        for (let j = 0; j < arr[i].length; j++) {
          arr[i][j] === arr[i][0] ? up = arr[i][0].toUpperCase() : up = up + arr[i][j];
        };
        str = str + up;
    }
  return str;
};

const snake = string => {
  let lowerString = string.toLowerCase();
  let arr = lowerString.split(' ');
  let wordArr = [];
  for (let word of arr) {
  wordArr.toUpperCase
  }

  return arr.join('_');
};

const kebab = string => {
  let lowerString = string.toLowerCase();
  let arr = lowerString.split(' ');
  return arr.join('-');
};

const title = string => {
  let lowerString = string.toLowerCase();
  let arr = lowerString.split(' ');
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let up = '';
        for (let j = 0; j < arr[i].length; j++) {
          arr[i][j] === arr[i][0] ? up = arr[i][0].toUpperCase() : up = up + arr[i][j];
        };
        newArr.push(up);
    }
  let result = newArr.join(' ');
  return result;
};

const vowel = string => {
  let result = '';
  for (let char of string) {
    switch (true) {
      case (char === 'a'):
        result = result + char.toUpperCase();
        break;
      case (char === 'e'):
        result = result + char.toUpperCase();
        break;
      case (char === 'i'):
        result = result + char.toUpperCase();
        break;
      case (char === 'o'):
        result = result + char.toUpperCase();
        break;
      case (char === 'u'):
        result = result + char.toUpperCase();
        break;
      default:
        result = result + char;
    }
  }
  return result;
};

const consonant = string => {
  let result = '';
  for (let char of string) {
    switch (true) {
      case (char === 'a'):
        result = result + char.toLowerCase();
        break;
      case (char === 'e'):
        result = result + char.toLowerCase();
        break;
      case (char === 'i'):
        result = result + char.toLowerCase();
        break;
      case (char === 'o'):
        result = result + char.toLowerCase();
        break;
      case (char === 'u'):
        result = result + char.toLowerCase();
        break;
      default:
        result = result + char.toUpperCase();
    }
  }
  return result;
};

const upper = string => {
 var str = string.toUpperCase();
 return str;
};

const lower = string => {
  var str = string.toLowerCase();
  return str;
 };

console.log(makeCase("this is a string", "camel"));
// expected output: thisIsAString
console.log(makeCase("this is a string", "pascal"));
// expected output: ThisIsAString
console.log(makeCase("this is a string", "snake"));
// expected output: this_is_a_string
console.log(makeCase("this is a string", "kebab"));
// expected output: this-is-a-string
console.log(makeCase("this is a string", "title"));
// expected output: This Is A String
console.log(makeCase("this is a string", "vowel"));
// expected output: thIs Is A strIng
console.log(makeCase("this is a string", "consonant"));
// expected output: THiS iS a STRiNG
console.log(makeCase("this is a string", ["upper", "snake"]));
// expected output: THIS_IS_A_STRING