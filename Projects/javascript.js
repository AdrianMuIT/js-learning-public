let selectedRandomNumbers = [];
let userSelectedNumbers = [];
let leftToGuess = 0;

function play() { 
  reset();
  const inputElement = document.querySelector('.js-input-number');
  const outputElement = document.querySelector('.js-result');
  const number = Number(inputElement.value);

  randomNumber(number);                         //Generate random number
  highlightSequence(selectedRandomNumbers);     //Buttons Highlits Sequence
  
  outputElement.innerHTML = number;             //Shows # left to guess

  console.log(selectedRandomNumbers);
};

//set random numbers based on amount user decided
function randomNumber(amount) {
  selectedRandomNumbers = [];

  for (let i = 0; i < amount; i++) {
    const randomInput = Math.floor(Math.random() * 9) + 1;
    selectedRandomNumbers.push(randomInput);
  };
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


//save clicked number in the array, with order


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

//Empty arrays
function reset() {
  selectedRandomNumbers = [];
  userSelectedNumbers = [];
  document.querySelector('.js-user-array').innerHTML = '';
  document.querySelector('.js-count-down').innerHTML = '';
  document.querySelector('.js-win-or-lose').innerHTML = '';
};

