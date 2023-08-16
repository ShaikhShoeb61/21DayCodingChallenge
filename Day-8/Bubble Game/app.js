const boardContainer = document.querySelector(".board-main-container");
const gameCountDown = document.querySelector(".gameCountDown");
const hitNumber = document.querySelector(".hitNumber");
const gameScore = document.querySelector(".score");

let countDown = 60;
let hitRn;
let score = 0;

const increaseScore = () => {
  score += 10;
  gameScore.textContent = score;
};

const getNewHit = () => {
  hitRn = Math.floor(Math.random() * 10);
  hitNumber.textContent = hitRn;
};

const makeBubble = () => {
  let clutter = "";

  for (let i = 1; i <= 80; i++) {
    const randomNumber = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${randomNumber}</div>`;
  }
  
  boardContainer.innerHTML = clutter; // Clear previous bubbles and set new ones
};

const runTimer = () => {
  let timerInterval = setInterval(function () {
    if (countDown > 0) {
      countDown--;
      gameCountDown.textContent = countDown;
    } else {
      clearInterval(timerInterval);
      boardContainer.innerHTML = `<h1>Game Over</h1>`;
    }
  }, 1000);
};

boardContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("bubble")) {
    const clickedNum = Number(e.target.textContent);
    if (clickedNum === hitRn) {
      increaseScore();
      e.target.remove();
      makeBubble();
      getNewHit();
    } else {
        boardContainer.innerHTML = `<h1>Wrong Answer</h1>`;
        gameScore.textContent = 0;
        setTimeout(() => {
          makeBubble()
          getNewHit()
      }, 1000);
    }
  }
});

runTimer();
makeBubble();
getNewHit();
