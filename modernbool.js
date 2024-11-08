let score = JSON.parse(localStorage.getItem('score')) || {
  win: 0,
  lose: 0,
  ties: 0
};

function generateCompMove() {
  const RandNum = Math.random();
  let CompMove = '';
  
  // Убираем класс hidden, чтобы показывать изображение
  const compPickImg = document.querySelector('.comp-pick');
  
  if (RandNum >= 0 && RandNum <= 1 / 3) {
    CompMove = 'Rock';
    compPickImg.src = `img/rock.png`;
  } else if (RandNum > 1 / 3 && RandNum <= 2 / 3) {
    CompMove = 'Paper';
    compPickImg.src = `img/paper.png`;
  } else {
    CompMove = 'Scissors';
    compPickImg.src = `img/sc.png`;
  }

  // Убираем класс hidden, чтобы показывать изображение компьютера
  compPickImg.classList.remove('hidden');
  
  return CompMove;
}

function Rock() {
  let result = '';
  const CompMove = generateCompMove();
  const myPickImg = document.querySelector('.my-pick');
  
  if (CompMove === 'Rock') {
    result = 'Tie';
    score.ties += 1;
  } else if (CompMove === 'Paper') {
    result = 'You lose!';
    score.lose += 1;
  } else {
    result = 'You win!';
    score.win += 1;
  }

  myPickImg.src = `img/rock.png`;
  myPickImg.classList.remove('hidden'); // Показываем изображение

  localStorage.setItem('score', JSON.stringify(score));

  document.querySelector('#scoreDisplay').textContent = `Your scores: You win: ${score.win}, You lose: ${score.lose}, You ties: ${score.ties}`;
}

function Paper() {
  let result = '';
  const CompMove = generateCompMove();
  const myPickImg = document.querySelector('.my-pick');
  
  if (CompMove === 'Rock') {
    result = 'You win!';
    score.win += 1;
  } else if (CompMove === 'Paper') {
    result = 'Tie';
    score.ties += 1;
  } else {
    result = 'You lose!';
    score.lose += 1;
  }

  myPickImg.src = `img/paper.png`;
  myPickImg.classList.remove('hidden'); // Показываем изображение

  localStorage.setItem('score', JSON.stringify(score));

  document.querySelector('#scoreDisplay').textContent = `Your scores: You win: ${score.win}, You lose: ${score.lose}, You ties: ${score.ties}`;
}

function Scissors() {
  let result = '';
  const CompMove = generateCompMove();
  const myPickImg = document.querySelector('.my-pick');
  
  if (CompMove === 'Rock') {
    result = 'You lose!';
    score.lose += 1;
  } else if (CompMove === 'Paper') {
    result = 'You win!';
    score.win += 1;
  } else {
    result = 'Tie';
    score.ties += 1;
  }

  myPickImg.src = `img/sc.png`;
  myPickImg.classList.remove('hidden'); // Показываем изображение

  localStorage.setItem('score', JSON.stringify(score));

  document.querySelector('#scoreDisplay').textContent = `Your scores: You win: ${score.win}, You lose: ${score.lose}, You ties: ${score.ties}`;
}

function Remove() {

  score = { win: 0, lose: 0, ties: 0 };

  localStorage.setItem('score', JSON.stringify(score));

  document.querySelector('.my-pick').classList.add('hidden');
  document.querySelector('.comp-pick').classList.add('hidden');

  document.querySelector('#scoreDisplay').textContent = `Your scores: You win: ${score.win}, You lose: ${score.lose}, You ties: ${score.ties}`;
}
