let selectedRandomNumbers = [];
let userSelectedNumbers = [];

function play() { 
  selectedRandomNumbers = [];
  const inputElement = document.querySelector('.js-input-number');
  const number = Number(inputElement.value);

  randomNumber(number);
  highlightSequence(selectedRandomNumbers);

  console.log(selectedRandomNumbers);
};

//Function to highlight numbers for user to remeber
function highlightSequence(array) {
  for (let i = 0; i < array.length; i++) {
    setTimeout(function() {
      highlightButton(array[i])
    }, i * 700);
  };
  setTimeout(countDown, array.length * 700);
};

function highlightButton(number) {
  const button = document.querySelector(`.js-number-${number}`);
  
  button.classList.remove('active-button');
  button.classList.add('active-button');

  setTimeout(function() {
    button.classList.remove('active-button');
  }, 400);
};


//set random numbers based on amount user decided
function randomNumber(amount) {
  selectedRandomNumbers = [];

  for (let i = 0; i < amount; i++) {
    const randomInput = Math.floor(Math.random() * 18) + 1;
    selectedRandomNumbers.push(randomInput);
  };
};


//save clicked number in the array, with order
let howManyNumbers = 0;

function clickNumber(x) {
  userSelectedNumbers.push(x);
  console.log(userSelectedNumbers);
};  


//Function to return True or False - if array user === array comp
function returnTrueOrFalse() {
  for (let i = 0; i < selectedRandomNumbers.length; i++) {
    if (selectedRandomNumbers[i] !== userSelectedNumbers[i]) {
      return false;
    }
  };
  return true;
};


//return win or lose information base on returnTrueOrFalse function
function checkResult() {
  if (returnTrueOrFalse()) {
    return document.querySelector('.js-win-or-lose').innerHTML = `You Won!`;
  } 

  return document.querySelector('.js-win-or-lose').innerHTML = `You Lost!`;
};


//Count down after user click Play
function countDown() {
  let i = 5;
  const count = document.querySelector('.js-count-down');

  const intervalID = setInterval(function() {
    count.innerHTML = i;
    
    if (i === 0) {
      clearInterval(intervalID);
      return count.innerHTML = 'Start';
    }

    i--;
  }, 500); 
};


//Empty arrays
function reset() {
  selectedRandomNumbers = [];
  userSelectedNumbers = [];
  document.querySelector('.js-user-array').innerHTML = '';
  document.querySelector('.js-count-down').innerHTML = '';
  document.querySelector('.js-win-or-lose').innerHTML = '';
};
