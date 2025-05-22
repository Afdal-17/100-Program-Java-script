const startBtn = document.getElementById("startBtn");
const jumpscareDiv = document.getElementById("jumpscare");
const screamSound = document.getElementById("screamSound");

startBtn.addEventListener("click", () => {
  // Delay sebelum jumpscare (dalam milidetik)
  setTimeout(() => {
    jumpscareDiv.classList.remove("hidden");
    screamSound.play();
  }, 5000); // 5 detik delay
});
