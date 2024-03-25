const wordElement = document.getElementById("word");
const guessInput = document.getElementById("guess-input");
const massageElement = document.getElementById("massage");

const words = ["test", "work", "word", "hipopotami"];
const randomIndex = Math.floor(Math.random() * words.length);
const selectWord = words[randomIndex];
const hiddenWord = selectWord.replace(/./g, "*");
const guess = guessInput.value.toLowerCase();

wordElement.textContent = hiddenWord;

function checkGuess() {
  if (guess == selectWord) {
    displayMassage("Congratulations! You guessed the word correctly!");
  } else {
    displayMassage("Wrong guess. try again!");
  }

  guessInput.value = "";
}

function displayMassage(massage) {
  massageElement.textContent = massage;
}
