// Variables for the DOM elements
const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const settingsBtn = document.getElementById("settings-btn");
const difficultySelect = document.getElementById("difficulty");

// Array
const words = [
  "dependent",
  "dog",
  "superficial",
  "admit",
  "juice",
  "javascript",
  "developer",
  "airplane",
  "great",
  "fun",
  "manipulate",
  "cat",
  "transition",
  "school",
  "computer",
  "programming",
  "drag",
  "loving",
  "north",
];

//Initializing word
let randomWord;

//Initializing score
let score = 0;

//Initializing time
let time = 10;

function addWordToDom() {
    let number = Math.random();
    number = number * (words.length + 1);
    number = Math.floor(number);
    randomWord = words[number];
    word.textContent = randomWord;
}
function updateScore() {
   scoreEl.textContent = Number(scoreEl.textContent) + 1 
}
text.addEventListener("input", function(e){
    if(text.value == randomWord) {
        updateScore();
        addWordToDom();
        time = time + 5;
        text.value = ``;
    }
});
function updateTime() {
    time = time - 1;
    if(time < 0) {
        time = 0;
        gameOver()
    }   
    timeEl.textContent = time;
}
let timer = setInterval(updateTime, 1000);

function gameOver() {
    endgameEl.style.display = `block`;
}

addWordToDom()