const levels = {
  easy: 5,
  medium: 3,
  hard: 2,
};

const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;

const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");

const words = [
  "hat",
  "river",
  "lucky",
  "statue",
  "generate",
  "stubborn",
  "cocktail",
  "runaway",
  "joke",
  "developer",
  "establishment",
  "hero",
  "javascript",
  "nutrition",
  "revolver",
  "echo",
  "siblings",
  "investigate",
  "horrendous",
  "sympton",
  "laughter",
  "magic",
  "master",
  "space",
  "definition",
];

// function init() {
//   console.log("init");
// }

const init = () => {
  // Show numbers of seconds in UI
  seconds.innerHTML = currentLevel;
  showWord(words);
  //  Start Matching on Word Input.
  wordInput, addEventListener("input", startMatch);
  setInterval(countdown, 1000);
  // Check Game Status.
  setInterval(checkStatus, 50);
};

// Show Random Words
const showWord = (words) => {
  const randomIndex = Math.floor(Math.random() * words.length);
  //   console.log(randomIndex);
  currentWord.innerHTML = words[randomIndex];
};
const countdown = () => {
  // Make sure time is not runout
  if (time > 0) {
    time--;
  } else if (time === 0) {
    isPlaying = false;
  }
  timeDisplay.innerHTML = time;
};

const checkStatus = () => {
  if (!isPlaying && time === 0) {
    message.innerHTML = "Game Over!!!";
    score = -1;
  }
};

const startMatch = () => {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = "";
    score++;
  }
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
};
// Match currentWord to wordInput
const matchWords = () => {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = "Correct!!!";
    return true;
  } else {
    message.innerHTML = "";
    return false;
  }
};

window.addEventListener("load", init);
