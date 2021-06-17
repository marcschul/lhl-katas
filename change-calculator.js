const calculateChange = (total, cash) => {
  let change = cash - total;
  let obj = {};

  for (let x = 0; change > 0; x++) {
    switch (true) {
      case (change >= 2000):
        change = change - 2000;
        obj.twentyDollar === undefined ? obj.twentyDollar = 1 : obj.twentyDollar++;
        break;
      case (change >= 1000 && change < 2000):
        change = change - 1000;
        obj.tenDollar === undefined ? obj.tenDollar = 1 : obj.tenDollar++;
        break;
      case (change >= 500 && change < 1000):
        change = change = change - 500;
        obj.fiveDollar === undefined ? obj.fiveDollar = 1 : obj.fiveDollar++;
        break;
      case (change >= 200 && change < 500):
        change = change - 200;
        obj.twoDollar === undefined ? obj.twoDollar = 1 : obj.twoDollar++;
        break;
      case (change >= 100 && change < 200):
        change = change - 100;
        obj.oneDollar === undefined ? obj.oneDollar = 1 : obj.oneDollar++;
        break;
      case (change >= 25 && change < 100):
        change = change - 25;
        obj.quarter === undefined ? obj.quarter = 1 : obj.quarter++;
        break;
      case (change >= 10 && change < 25):
        change = change - 10;
        obj.dime === undefined ? obj.dime = 1 : obj.dime++;
        break;
      case (change >= 5 && change < 10):
        change = change - 5;
        obj.nickel === undefined ? obj.nickel = 1 : obj.nickel++;
        break;
      case (change >= 1 && change < 5):
        change = change - 1;
        obj.penny === undefined ? obj.penny = 1 : obj.penny++;
        break;
      default:
        break;
    }
  }
  return obj;
};

console.log(calculateChange(1787, 2000));
// { twoDollar: 1, dime: 1, penny: 3 }
console.log(calculateChange(2623, 4000));
// { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
console.log(calculateChange(501, 1000));
// { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }