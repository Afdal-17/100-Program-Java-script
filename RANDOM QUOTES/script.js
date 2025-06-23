const quotes = [
  "Jangan tunda pekerjaan hari ini.",
  "Sukses datang dari usaha yang tidak terlihat.",
  "Belajarlah dari kegagalan.",
  "Semangat adalah kunci utama."
];

function generateQuote() {
  const q = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").innerText = q;
}
