let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let running = false;

const display = document.getElementById('display');
const lapsList = document.getElementById('laps');

function updateDisplay() {
  let h = hours < 10 ? '0' + hours : hours;
  let m = minutes < 10 ? '0' + minutes : minutes;
  let s = seconds < 10 ? '0' + seconds : seconds;
  display.textContent = `${h}:${m}:${s}`;
}

document.getElementById('start').addEventListener('click', () => {
  if (!running) {
    running = true;
    timer = setInterval(() => {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
      updateDisplay();
    }, 1000);
  }
});

document.getElementById('stop').addEventListener('click', () => {
  running = false;
  clearInterval(timer);
});

document.getElementById('reset').addEventListener('click', () => {
  running = false;
  clearInterval(timer);
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
  lapsList.innerHTML = '';
});

document.getElementById('lap').addEventListener('click', () => {
  if (running) {
    let lapTime = display.textContent;
    let li = document.createElement('li');
    li.textContent = `Lap: ${lapTime}`;
    lapsList.appendChild(li);
  }
});

updateDisplay();
