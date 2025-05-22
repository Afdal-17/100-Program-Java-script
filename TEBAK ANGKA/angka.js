const secret = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
  const userGuess = parseInt(document.getElementById('guess').value);
  const result = document.getElementById('result');

  if (userGuess === secret) {
    result.textContent = "Benar! Kamu menang!";
  } else {
    result.textContent = "Salah! Coba lagi!";
  }
}
