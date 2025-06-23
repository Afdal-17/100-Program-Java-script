const board = document.getElementById("board");
for (let i = 10; i > 0; i--) {
  const row = board.insertRow();
  for (let j = 1; j <= 10; j++) {
    const cell = row.insertCell();
    const num = i % 2 === 0 ? (i - 1) * 10 + j : i * 10 - j + 1;
    cell.textContent = num;
  }
}