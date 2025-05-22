const teks = "Halo, selamat datang di situsku!";
let index = 0;

function ketik() {
  if (index < teks.length) {
    document.getElementById("teks").textContent += teks[index];
    index++;
    setTimeout(ketik, 100);
  }
}

ketik();
