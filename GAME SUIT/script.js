function main(pilihanPlayer) {
  const pilihanKomputer = ['gunting', 'batu', 'kertas'][Math.floor(Math.random() * 3)];
  let hasil = '';
  if (pilihanPlayer === pilihanKomputer) {
    hasil = 'Seri';
  } else if (
    (pilihanPlayer === 'gunting' && pilihanKomputer === 'kertas') ||
    (pilihanPlayer === 'batu' && pilihanKomputer === 'gunting') ||
    (pilihanPlayer === 'kertas' && pilihanKomputer === 'batu')
  ) {
    hasil = 'Menang!';
  } else {
    hasil = 'Kalah!';
  }
  document.getElementById("hasil").textContent = `Kamu pilih ${pilihanPlayer}, komputer pilih ${pilihanKomputer}. ${hasil}`;
}