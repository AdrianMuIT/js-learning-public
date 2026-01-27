//EX 11o

let stringsOne = ['hello', 'world', 'search', 'good'];
let index = -1;

for (let i = 0; i < stringsOne.length; i++) {
  if (stringsOne[i] === 'search') {
    index = i;
  }
}

console.log(index);


let stringsTwo = ['not', 'found'];
index = -1;

for (let i = 0; i < stringsTwo.length; i++) {
  if (stringsTwo[i] === 'search') {
    index = i;
  }
}

console.log(index);

//EX 11p
let stringsThree = ['hello', 'world', 'search', 'good', 'search'];

for (let i = 0; i < stringsThree.length; i++) {
  if (stringsThree[i] === 'search') {
    index = i;
    break
  }
}

console.log(index);

//EX 11q
function findIndex(array, word) {

  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) {
      return i;
    } 
  }
  
  return -1;
}

console.log(findIndex(['green', 'red', 'blue', 'red'], 'red'));
console.log(findIndex(['green', 'red', 'blue', 'red'], 'yellow'));

//EX 11r, s, t
//1.Sprawdzamy czy slowo === egg 
//2.Jesli tak, skip iteretion
//3. Jesli nie dodaj slowo do new aray

function removeEgg(foods) {
  let array = [];
  let eggsRemoved = 0;
  let reversed = foods.reverse();

  for (let i = reversed.length - 1; i >= 0; i--) {
      if (foods[i] === 'egg' && eggsRemoved < 2) {
        eggsRemoved ++;
        continue;
      } 

      array.push(foods[i]);
  }

  return array;
}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));



