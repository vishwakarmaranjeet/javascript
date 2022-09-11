let counterResult = document.getElementById("counter");
const startStop = document.getElementById("startstop");
const reset = document.getElementById("reset");

let initial = 0;
let counter = initial;
let intervalID = "";
let isRunning = false;

const isCounterRunning = () => {
  return (isRunning = !isRunning);
};

const incrementCounter = () => {
  if (isCounterRunning()) {
    intervalID = setInterval(() => {
      counter++;
      counterResult.innerHTML = counter;
    }, 1000);
  } else {
    clearInterval(intervalID);
  }
};
// Start stop counter
startStop.addEventListener("click", incrementCounter);
// Reset counter
reset.addEventListener("click", () => {
  clearInterval(intervalID);
  counterResult.innerHTML = initial;
});
document.addEventListener("DOMContentLoaded", () => {
  counterResult.innerHTML = initial;
});
