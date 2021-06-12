const instructorWithLongestName = instructors => {
  let longestName = '';
  let output = {};
  for (let obj of instructors) {
    obj.name.length > longestName.length ? (longestName = obj.name, output = obj) : null;
  }
  return output; 
};


console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
])); // expected output: {name: "Jeremiah", course: "Web"}
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
])); // expected output: {name: "Domascus", course: "Web"}