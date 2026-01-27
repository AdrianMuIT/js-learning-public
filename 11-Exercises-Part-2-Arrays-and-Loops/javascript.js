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

//EX 11r - remove 'egg' from given array
function removeEgg (foods) {
  const array = []; 
  
  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === 'egg') {
      continue;
    }
    
    array.push(foods[i]);
  }
  return array;
}


console.log(removeEgg(['egg', 'apple','egg', 'egg', 'ham']));

//EX 11s - remove two first 'eggs' from an array

function removeFirstEgg (foods) {
  const array = []; 
  let numberOfEggs = 0;
  
  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === 'egg' && numberOfEggs < 2) {
      numberOfEggs++;
      continue;
    }
    
    array.push(foods[i]);
  }
  return array;
}

console.log(removeFirstEgg(['egg', 'apple','egg', 'egg', 'ham']));



//EX 11t - remove two first 'eggs' from an array
function removeLastTwoEggs (foods) {
  const array = []; 
  let numberOfEggs = 0;
  const reversedArray = foods.slice().reverse(); // ['ham', 'egg', 'egg', 'apple', 'egg'] -kopiujemy tablice i odwracamy kolejnosc

  for (let i = 0; i < reversedArray.length; i++) {    //reversedArray.legth = 4
    if (reversedArray[i] === 'egg' && numberOfEggs < 2) {   //['ham', --'egg', --'egg', 'apple', 'egg'] 
      numberOfEggs++;                                       //- usuwamy dwwa pierwszesze 'egg' (w odwroceonej array)
      continue;                                             //, czyli jakby dwa egg od tylu
    }
    
    array.push(reversedArray[i]);  //['ham', 'apple', 'egg'] - dodajemy strings to new array (odwrocona kolejnosc nadal)
  }
  return array.reverse(); //['ham', 'apple', 'egg']  -> ['egg', 'apple', 'egg'] - wracamy do pierwotnej kolejnosci
}

console.log(removeLastTwoEggs(['egg', 'apple','egg', 'egg', 'ham']));

//EX 11u
const foods = ['egg', 'apple','egg', 'egg', 'ham'];

console.log(removeLastTwoEggs(foods));
console.log(foods);



//EX 11v FizzBuzz problem

for (let i = 1; i <= 20; i++) {
  const Fizz = 'Fizz';
  const Buzz = 'Buzz'

  if (i % 3 === 0 && i % 5 === 0) {
    console.log(Fizz + Buzz);
  } else if (i % 5 === 0) {
    console.log(Buzz);
  } else if (i % 3 === 0) {
    console.log(Fizz)
  } else {
    console.log(i);
  }
}


//EX 11w
function findIndex(array, word) {

  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) {
      return i;
    } 
  }
  
  return -1;
}


//EX 11w
// Funkcja pobiera dane 
// Nastepnie zwraca stringi pojedyncze - usuwa duplikaty
// 1. Petla sprawdza pierwszy string index[i] jest w nowej array we funkcji

function uniqe (array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    const word = array[i];

    if (!contains(result, word)) {
      result.push(word);
    } 
  }
  
  return result;
} 


function contains(array, word) {

  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) {
      return true;
    } 
  }

  return false;
}
console.log(uniqe(['green', 'red', 'blue', 'red']));
console.log(uniqe(['red', 'green', 'green', 'red']));