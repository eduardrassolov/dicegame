const startGame = document.querySelector('h1');

const dice1 = document.querySelector('.player1');
const dice2 = document.querySelector('.player2');

const playerText = document.querySelectorAll('.container h3');


startGame.addEventListener('click', () => {
  play();
});

function play() {
  playerText.forEach((item, i) => {
    item.classList.remove('winner-text');
  });


  dice1.classList.remove('winner-dice');
  dice2.classList.remove('winner-dice');

  let player1 = getRandomValue();
  let player2 = getRandomValue();


  dice1.setAttribute('src', `images/dice${player1}.png`);
  dice2.setAttribute('src', `images/dice${player2}.png`);

  let winner = whoWin(player1, player2);
  if (winner) {
    document.querySelector('h2').innerText = `Player ${winner} winner!`;
    document.querySelector(`.player${winner}`).classList.add('winner-dice');
    playerText[winner - 1].classList.add('winner-text');
  }
  else
    document.querySelector('h2').innerText = 'No winner';

}

function whoWin(player1, player2) {
  if (player1 > player2)
    return 1;
  else if (player1 < player2)
    return 2;
  else
    return false;
}

function getRandomValue() {
  return Math.floor(Math.random() * 6 + 1);
}
