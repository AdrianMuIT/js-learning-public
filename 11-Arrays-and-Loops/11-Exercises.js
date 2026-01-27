//EX 11a
const numbers = [10, 20, 30]; 

numbers[2] = 99;

console.log(numbers);

//EX 11b
function getLastValue(array) {
  lastIndex = array.length - 1;

  console.log(array[lastIndex]);
}

getLastValue([1, 20, 22, 24, 5]);
getLastValue(['hi', 'hello', 'good']);

//EX 11c

function arraySwap(array) {
  indexZero = 0;
  lastIndex = array.length - 1;

  const indexZeroValue = array[indexZero];
  const indexLastValue = array[lastIndex];

  array[indexZero] = indexLastValue;
  array[lastIndex] = indexZeroValue;

  console.log(array);
}

arraySwap([1, 20, 22, 24, 5]);
arraySwap(['hi', 'hello', 'good']);


//EX 11d
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

//EX 11e
for (let i = 5; i >= 0; i--) {
  console.log(i);
}

//EX 11f
let ia = 0;
let ib = 5;

while (ia <= 10) {
  console.log(ia);
  ia += 2;
}

while (ib >= 0) {
  console.log(ib);
  ib --;
}

//EX 11f, 
function increseByOne (array) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(array[i] + 1);
  }

  return result;
}

console.log(increseByOne([1, 2, 3]));
console.log(increseByOne([2, 3, 4]));


console.log('break');
console.log('break');

//EX 11i

function addNum(array, num) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i] + num);
  }

  return newArray;
}

console.log(addNum([1, 2, 3], 2));
console.log(addNum([1, 2, 3], 3));
console.log(addNum([-2, -1, 0, 99], 2));

console.log('break');
console.log('break');

//EX 11j
function addArrays(array1, array2) {
  const sumArrays = [];
  
  for (let i = 0; i < array1.length; i++) {
    sumArrays.push(array1[i] + array2[i]);
  }

  return sumArrays;
}

console.log(addArrays([1, 1, 2], [2, 2, 5]));
console.log(addArrays([1, 2, 3], [5, 5, 6]));

//EX 11k
function countPositive(nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      count ++;
    }
  }

  return count;
}

console.log(countPositive([1, -3, 5]));
console.log(countPositive([-2, 3, -5, 7, 10]));


//EX 11l
function minMax(nums) {
  const result = {
    min: null,
    max: null
  }

  for (let i = 0; i < nums.length; i++) {
    if (result.min === null || nums[i] < result.min) {
      result.min = nums[i];
    }

    if (result.max === null || nums[i] > result.max) {
      result.max = nums[i];
    }
  }

  return result;
}

console.log(minMax([1, -3, 5]));
console.log(minMax([]));
console.log(minMax([3]));


//EX 11n
function countWords(words) {
  const wordsSummaryObject = {};

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (!wordsSummaryObject[word]) {
      wordsSummaryObject[word] = 1;
    } else {
      wordsSummaryObject[word]++;
    }
  }

  return wordsSummaryObject;
}
    
console.log(countWords(['apple', 'grape', 'apple', 'apple']));


