const urlEncode = text => {
  let newStr = '';
  for (const value of text.trim()) {
    value === ' ' ? newStr += '%20' : newStr += value;
  }
  return newStr;
};

console.log(urlEncode("Lighthouse Labs")); 
// expected out: Lighthouse%20Labs
console.log(urlEncode(" Lighthouse Labs ")); 
// expected out: Lighthouse%20Labs
console.log(urlEncode("blue is greener than purple for sure"));
// expected out: blue%20is%20greener%20than%20purple%20for%20sure 