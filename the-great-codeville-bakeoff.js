// LOGIC
// if recipes ingredients are found in bakeryA and bakeryB, return recipe's name

const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  let bakeryABool = false;
  let bakeryBBool = false;

  for (let i = 0; i < bakeryA.length || i < bakeryB.length; i++) {
    for (let j = 0; j < recipes.length; j++) {
      if (JSON.stringify(recipes[j].ingredients[0]) === JSON.stringify(bakeryA[i])) {
        bakeryABool = true;
      } else if (JSON.stringify(recipes[j].ingredients[0]) === JSON.stringify(bakeryB[i])) {
        bakeryBBool = true;
      }

      if (bakeryABool === true) {
        if (JSON.stringify(recipes[j].ingredients[1]) === JSON.stringify(bakeryB[i])) {
          bakeryBBool = true;
        }
      }

      if (bakeryBBool === true) {
        if (JSON.stringify(recipes[j].ingredients[1]) === JSON.stringify(bakeryA[i])) {
          bakeryABool === true;
        }
      }

      if (bakeryABool && bakeryBBool) {
        return recipes[j].name;
      }
    }
  }
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
// expected output: Persian Cheesecake

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
// expected output: Nima's Famous Dijon Raisins