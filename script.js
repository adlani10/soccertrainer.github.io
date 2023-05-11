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
// Get the checkboxes and color classes
const greenCheckbox = document.getElementById('green-checkbox');
const redCheckbox = document.getElementById('red-checkbox');
const blueCheckbox = document.getElementById('blue-checkbox');
const orangeCheckbox = document.getElementById('orange-checkbox');

const greenClass = 'green';
const redClass = 'red';
const blueClass = 'blue';
const orangeClass = 'orange';

// Function to apply selected colors
function applySelectedColors() {
  const body = document.body;
  body.classList.toggle(greenClass, greenCheckbox.checked);
  body.classList.toggle(redClass, redCheckbox.checked);
  body.classList.toggle(blueClass, blueCheckbox.checked);
  body.classList.toggle(orangeClass, orangeCheckbox.checked);
}

// Event listeners for checkbox changes
greenCheckbox.addEventListener('change', applySelectedColors);
redCheckbox.addEventListener('change', applySelectedColors);
blueCheckbox.addEventListener('change', applySelectedColors);
orangeCheckbox.addEventListener('change', applySelectedColors);

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
  var selectedColors = [];

  if (greenCheckbox.checked) {
    selectedColors.push(greenClass);
  }
  if (redCheckbox.checked) {
    selectedColors.push(redClass);
  }
  if (blueCheckbox.checked) {
    selectedColors.push(blueClass);
  }
  if (orangeCheckbox.checked) {
    selectedColors.push(orangeClass);
  }

  if (selectedColors.length > 1) {
    var randomIndex = Math.floor(Math.random() * selectedColors.length);
    color = selectedColors[randomIndex];
    while (number === lastNumber && color === lastColor) {
      number = getRandomNumber();
      randomIndex = Math.floor(Math.random() * selectedColors.length);
      color = selectedColors[randomIndex];
    }
  } else if (selectedColors.length === 1) {
    color = selectedColors[0];
  } else {
    color = '';
  }

  lastNumber = number;
  lastColor = color;

  const body = document.body;
  body.className = color;
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
  gearIcon.innerHTML = isOpen ? '&times;' : '&#9776;';
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
