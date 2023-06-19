const player1Input = document.getElementById('player1');
const player2Input = document.getElementById('player2');
const scoreP1 = document.getElementById('score1');
const scoreP2 = document.getElementById('score2');
const addBtn1 = document.getElementById('addBtn1');
const subsBtn1 = document.getElementById('subsBtn1');
const resetBtn1 = document.getElementById('resetBtn1');
const addBtn2 = document.getElementById('addBtn2');
const subsBtn2 = document.getElementById('subsBtn2');
const resetBtn2 = document.getElementById('resetBtn2');
  let score1 = 0;
  let score2 = 0;

addBtn1.addEventListener('click', function() {
  score1++;
  scoreP1.textContent = score1;
});

subsBtn1.addEventListener('click', function() {
  score1--;
  scoreP1.textContent = score1;
});

resetBtn1.addEventListener('click', function() {
  score1 = 0;
  scoreP1.textContent = score1;
});

addBtn2.addEventListener('click', function() {
  score2++;
  scoreP2.textContent = score2;
});

subsBtn2.addEventListener('click', function() {
  score2--;
  scoreP2.textContent = score2;
});

resetBtn2.addEventListener('click', function() {
  score2 = 0;
  scoreP2.textContent = score2;
});