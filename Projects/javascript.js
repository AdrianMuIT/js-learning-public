const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
let selectedRandomNumbers = [];
let userSelectedNumbers = [];

function play() {
  selectedRandomNumbers = [];
  const inputElement = document.querySelector('.js-input-number');
  const number = Number(inputElement.value);

  randomNumber(number);

  console.log(selectedRandomNumbers);
};

function randomNumber(amount) {
  selectedRandomNumbers = [];

  for (let i = 0; i < amount; i++) {
    const randomInput = Math.floor(Math.random() * 18) + 1;
    selectedRandomNumbers.push(randomInput);
  };
};

function clickNumber(x) {
  userSelectedNumbers.push(x);
  console.log(userSelectedNumbers);
};

function returnTrueOrFalse() {
  for (let i = 0; i < selectedRandomNumbers.length; i++) {
    if (selectedRandomNumbers[i] !== userSelectedNumbers[i]) {
      return false;
    }
  };
  return true;
};

function checkResult() {
  if (returnTrueOrFalse()) {
    return document.querySelector('.js-win-or-lose').innerHTML = `You Won!`;
  } 

  return document.querySelector('.js-win-or-lose').innerHTML = `You Lost!`;
};

function reset() {
  selectedRandomNumbers = [];
  userSelectedNumbers = [];
};

