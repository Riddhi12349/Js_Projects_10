'use strict';

const score_0 = document.querySelector('#score--0');
const score_1 = document.querySelector('#score--1');
const diceEL = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const currentS0_EL = document.querySelector('#current--0');
const currentS1_EL = document.querySelector('#current--1');

const player0_EL = document.querySelector('.player--0');
const player1_EL = document.querySelector('.player--1');

//Starting Conditions
let scores, currentScore, activePlayer;

const init = function () {
  scores = [0, 0];
  score_0.textContent = 0;
  score_1.textContent = 0;

  currentScore = 0;
  currentS0_EL.textContent = 0;
  currentS1_EL.textContent = 0;

  activePlayer = 0;
  playing = true;

  diceEL.classList.add('hidden');

  player0_EL.classList.remove('player--winner');
  player1_EL.classList.remove('player--winner');

  player0_EL.classList.add('player--active');
  player1_EL.classList.remove('player--active');
};

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0_EL.classList.toggle('player--active');
  player1_EL.classList.toggle('player--active');
};

//Rolling Dice Functionality

btnRoll.addEventListener('click', function () {
  if (playing) {
    //1.Generate a random no : for random dice roll
    const no = Math.trunc(Math.random() * 6) + 1;
    console.log(no);

    //2. Display Dice acc to that no
    diceEL.classList.remove('hidden');
    diceEL.src = `dice-${no}.png`;

    //3. Check for rolled=1 , if true ,switch to next player
    if (no != 1) {
      //Add no to current score
      currentScore += no;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //Switch to nxt player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //1. Add current Score to active player score----
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //2. Check if player's score >= 100
    if (scores[activePlayer] >= 100) {
      //FINISH THE GAME

      playing = false;
      diceEL.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //3. Switch Player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
