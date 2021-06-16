// Use the value below whenever you need the value of Pi
const PI = 3.14159 ;

const sphereVolume = radius => {
  return (radius**3)*(Math.PI)*(4/3);
}

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);
//expected output: true

const coneVolume = (radius, height) => {
  return (Math.PI)*(radius**2)*(height/3);
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);
//expected output: true

const prismVolume = (height, width, depth) => {
  return height*width*depth;
}

console.log(prismVolume(3, 4, 5) === 60);
//expected output: true

const totalVolume = solids => {
  let sum = 0;
  for (let element of solids) {
    switch (element.type) {
      case 'sphere':
        sum += sphereVolume(element.radius);
        break;
      case 'cone':
        sum += coneVolume(element.radius, element.height);
        break;
      case 'prism':
        sum += prismVolume(element.height, element.width, element.depth);
        break;
      default:
        break;
    }
  }
  console.log(Math.floor(sum));
  return Math.floor(sum);
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);
//expected output: true