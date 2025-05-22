let nyala = false;

function toggleLampu() {
  const lampu = document.getElementById("lampu");
  if (nyala) {
    lampu.src = "https://www.w3schools.com/js/pic_bulboff.gif";
  } else {
    lampu.src = "https://www.w3schools.com/js/pic_bulbon.gif";
  }
  nyala = !nyala;
}
