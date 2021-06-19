const urlDecode = text => {

  let str = text;
  for (let i = 0; i < text.length; i++) {
    str = str.replace('%20', ' ');
  }

  let phraseArr = str.split('&');    
  let obj = {};

  for (let property of phraseArr) {
    let equalPos = property.search('=');
    let keyName = property.slice(0, equalPos);
    let valueName = property.slice(equalPos+1, property.length);
    obj[keyName] = valueName;
  }
  return obj;
};

console.log(urlDecode("duck=rubber"));
// expected output: {duck: "rubber"}
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
// expected output: {bootcamp: "Lighthouse Labs"}
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
// expected output: {city: "Vancouver", weather: "lots of rain"}
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
// expected output: "lots of rain"