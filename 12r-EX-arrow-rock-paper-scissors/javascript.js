let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

const rockButton = document.querySelector('.js-rock-button');
const paperButton = document.querySelector('.js-paper-button');
const scissorsButton = document.querySelector('.js-scissors-button');
const resetButton = document.querySelector('.js-reset-button');
const autoButton = document.querySelector('.js-auto-play-button');
let confirmationOutput = document.querySelector('.js-confirmation-buttons');
  
rockButton.addEventListener('click', () => playGame('rock'));
paperButton.addEventListener('click', () => playGame('paper'));
scissorsButton.addEventListener('click', () => playGame('scissors'));
resetButton.addEventListener('click', () => resetScore());
autoButton.addEventListener('click', () => autoPlay());


document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    playGame('rock');
  } else if (event.key === 'p') {
    playGame('paper');
  } else if (event.key === 's') {
    playGame('scissors');
  } else if (event.key === 'a') {
    autoPlay();
  } else if (event.key === 'Backspace') {
    resetScore();
  }
});

//Add visible score on the page
updateScoreElement(); 

//Computer randomly selects a move
function pickComputerMove () {
  const randomNumber = Math.random();
  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2/3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

    return computerMove;
}

//Compare the moves to get the result
function playGame(playerMove) {
  const computerMove = pickComputerMove(); 

  

  //Player move x Computer move 
  let result = '';

  if (playerMove === 'scissors') {
      if (computerMove === 'rock') {
      result = 'You lose.';
    } else if (computerMove === 'paper') {
      result = 'You win.';
    } else if (computerMove === 'scissors') {
      result = 'Tie.';
    }
  } else if (playerMove ==='paper') {
      if (computerMove === 'rock') {
        result = 'You win.';
      } else if (computerMove === 'paper') {
        result = 'Tie.';
      } else if (computerMove === 'scissors') {
        result = 'You lose.'
      }
  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You lose.';
    } else if (computerMove === 'scissors') {
      result = 'You win.'
    }
  }
  

  //Update a score
  if (result === 'You win.') {
    score.wins += 1;
  } else if (result === 'You lose.') {
    score.losses += 1;
  } else if (result === 'Tie.') {
    score.ties += 1;
  }
  
  //Save score into local storage under score, also convert JS object into JSON
  localStorage.setItem('score', JSON.stringify(score));

  //update score after onclick
  updateScoreElement();
  
  document.querySelector('.js-result')
    .innerHTML = `${result}`;

  document.querySelector('.js-moves')
    .innerHTML = `You <img src="images/${playerMove}.png" class="move-icon"> <img src="images/${computerMove}.png" class="move-icon" > Computer`;
}

//function for updating score in HTML on page 
function updateScoreElement() {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}. Losses: ${score.losses}. Ties: ${score.ties}`;
}

//Reset score; set <p> to empty
function resetScore() {
  const html = `
  <p>Are you sure you want to reset score?</p>
  <button class="js-yes-button">Yes</button>
  <button class="js-no-button">No</button>
  `;

  confirmationOutput.innerHTML = html;

  const yesButton = document.querySelector('.js-yes-button');
  const noButton = document.querySelector('.js-no-button');

  yesButton.addEventListener('click', () => {
    yesReset();
  });

  noButton.addEventListener('click', () => confirmationOutput.innerHTML = '');
};

function yesReset() {
  let zeroScore = {
    wins: 0,
    losses: 0,
    ties: 0
  }
  const resultOutput = document.querySelector('.js-result');
  const movesOutput = document.querySelector('.js-moves');

  score = zeroScore;
  localStorage.removeItem('score');
  updateScoreElement();

  resultOutput.innerHTML = '';
  movesOutput.innerHTML = '';
  confirmationOutput.innerHTML = '';
}; 


//setting autoplay option
//1. setting intervalID to be able to clearInterval(id)
let isAutoPlaying = false;
let intervalID;

function autoPlay() {
  let button = document.querySelector('.js-auto-play-button');

  if (!isAutoPlaying) {
    intervalID = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
      button.innerHTML = 'Stop Auto-Play';
      isAutoPlaying = true;
    }, 1000);
  } else {
    clearInterval(intervalID);
    button.innerHTML = 'Auto Play';
    isAutoPlaying = false;
  };
};
  
