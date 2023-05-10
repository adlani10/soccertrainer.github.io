var timeLeft = 5;
var number = getRandomNumber();
var color = getRandomColor();
var lastNumber = -1;
var lastColor = '';

function getRandomNumber() {
  var min = 1;
  var max = parseInt(document.getElementById("number-range-slider").value);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
  var colors = ['green', 'red', 'blue', 'orange'];
  var color = colors[Math.floor(Math.random() * colors.length)];
  while (color === lastColor) {
    color = colors[Math.floor(Math.random() * colors.length)];
  }
  lastColor = color;
  return color;
}

function displayNumberAndColor() {
  number = getRandomNumber();
  color = getRandomColor();
  while (number === lastNumber && color === lastColor) {
    number = getRandomNumber();
    color = getRandomColor();
  }
  lastNumber = number;
  document.body.className = color;
  document.getElementById('output').innerHTML = number;
}

function countdown() {
  if (timeLeft == 0) {
    timeLeft = parseInt(document.getElementById("interval-slider").value);
    displayNumberAndColor();
  } else {
    document.getElementById("countdown").innerHTML = timeLeft + " seconds";
    timeLeft--;
  }
}

function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('open');
}

const gearIcon = document.getElementById('gear-icon');
const menu = document.getElementById('menu');

let isOpen = false;

gearIcon.addEventListener('click', function() {
  isOpen = !isOpen;
  menu.style.right = isOpen ? '0' : '-100%';
  gearIcon.classList.toggle('open');
  gearIcon.innerHTML = isOpen ? '&times;' : '&#9881;';
});


displayNumberAndColor();
setInterval(countdown, 1000);

const timeSlider = document.getElementById('time-slider');
const timeLabel = document.getElementById('time-label');
timeSlider.addEventListener('input', function() {
  const value = this.value;
  timeLabel.innerText = `Interval: ${value} seconds`;
});

const numSlider = document.getElementById('num-slider');
const numLabel = document.getElementById('num-label');
numSlider.addEventListener('input', function() {
  const value = this.value;
  numLabel.innerText = `Number Range: 1 - ${value}`;
});
