let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;
let paused = false;

const display = document.getElementById('display');
const startPauseBtn = document.getElementById('startPauseBtn');
const resetBtn = document.getElementById('resetBtn');

startPauseBtn.addEventListener('click', startPause);
resetBtn.addEventListener('click', reset);

function startPause() {
  if (!running) {
    startTime = new Date().getTime();
    tInterval = setInterval(updateTime, 1);
    startPauseBtn.textContent = 'Pause';
    running = true;
    paused = false;
  } else if (!paused) {
    clearInterval(tInterval);
    updatedTime = new Date().getTime() - startTime;
    paused = true;
    startPauseBtn.textContent = 'Resume';
  } else {
    startTime = new Date().getTime() - updatedTime;
    tInterval = setInterval(updateTime, 1);
    paused = false;
    startPauseBtn.textContent = 'Pause';
  }
}

function reset() {
  clearInterval(tInterval);
  display.textContent = '00:00:00';
  startPauseBtn.textContent = 'Start';
  running = false;
  paused = false;
  updatedTime = 0;
}

function updateTime() {
  const now = new Date().getTime();
  difference = now - startTime;

  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  display.textContent = 
    (hours < 10 ? '0' : '') + hours + ':' + 
    (minutes < 10 ? '0' : '') + minutes + ':' + 
    (seconds < 10 ? '0' : '') + seconds;
}
