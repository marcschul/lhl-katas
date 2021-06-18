const organizeInstructors = instructors => {
  let newObj = {};
  for (let obj of instructors) {
    newObj[obj.course] === undefined ? newObj[obj.course] = [obj.name] : newObj[obj.course].push(obj.name);
  }
  return newObj;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
// expected output: {
//   iOS: ["Samuel"],
//   Web: ["Victoria", "Karim", "Donald"]
// }
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));
// expected output: {
//  Blockchain: ["Brendan"],
//  Web: ["David", "Carlos"],
//  iOS: ["Martha"]
//}