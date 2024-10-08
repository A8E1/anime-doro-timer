let timerInterval;


function updateTimer(milliseconds) {

  let hour = Math.floor(milliseconds / (1000 * 60 * 60));
  let minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((milliseconds / 1000) % 60);


  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }


  document.getElementById(
    "timer"
  ).innerHTML = `${hour}:${minutes}:${seconds}`;
}


function startTimer(milliseconds) {
  timerInterval = setInterval(() => {
    updateTimer(milliseconds);
    milliseconds -= 1000;
    
    if (milliseconds <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  }, 1000);
  updateTimer(0);
}


function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  updateTimer(0);
}


let timeoutID = "truthy";


const sleep = (milliseconds) => {
  return new Promise((resolve) => {
    timeoutID = setTimeout(resolve, milliseconds);
  });
};


const breakTimeSound = () => {
  let sound = new Audio("gojo-sound.wav");
  sound.play();
};


const focusTimeSound = () => {
  let sound = new Audio("luffy.wav");
  sound.play();
};


async function animeDoro() {
  while (timeoutID) {
    focusTimeSound();
    startTimer(1000 * 60 * 60 * 2);
    await sleep(1000 * 60 * 60 * 2 + 1000);
    //1000 * 61 * 60 * 2


    breakTimeSound();
    startTimer(1000 * 60 * 25);
    await sleep(1000 * 60 * 25 + 1000);
    //1000 * 61 * 25
  }
}


document.getElementById("start").addEventListener("click", async () => {
  timeoutID = "truthy";
  animeDoro();
});


document.getElementById("stop").addEventListener("click", () => {
  stopTimer();
  clearTimeout(timeoutID);
  timeoutID = null;
});
