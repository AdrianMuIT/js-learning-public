let score = JSON.parse(localStorage.getItem('score')) || {
      wins: 0,
      losses: 0,
      ties: 0
    };
    
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
      score.wins = 0;
      score.losses = 0;
      score.ties = 0;
      localStorage.removeItem('score');
      updateScoreElement();

       document.querySelector('.js-result')
        .innerHTML = '';

      document.querySelector('.js-moves')
        .innerHTML = '';
    };


    //setting autoplay option
    //1. setting intervalID to be able to clearInterval(id)
    let isAutoPlaying = false;
    let intervalID;

    function autoPlay() {
      let button = document.querySelector('.js-button-auto-play');

      if (!isAutoPlaying) {
        intervalID = setInterval(function() {
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
    
