function cek(jawaban) {
  const benar = "Jakarta";
  document.getElementById("hasil").textContent =
    jawaban === benar ? "Benar!" : "Salah!";
}