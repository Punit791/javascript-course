// Generate random hex color
function randomColor() {
  const hex = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }

  return color;
}

let intervalId;

// Change background color
function changeBgColor() {
  document.body.style.backgroundColor = randomColor();
}

// Start changing color
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }
};

// Stop changing color
const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

// Button events
document.querySelector('#start')
  .addEventListener('click', startChangingColor);

document.querySelector('#stop')
  .addEventListener('click', stopChangingColor);
