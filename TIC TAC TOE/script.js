let currentPlayer = 'X';
const board = document.getElementById("board");
for (let i = 0; i < 3; i++) {
  const row = document.createElement("tr");
  for (let j = 0; j < 3; j++) {
    const cell = document.createElement("td");
    cell.addEventListener("click", () => {
      if (!cell.textContent && !document.getElementById("status").textContent) {
        cell.textContent = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      }
    });
    row.appendChild(cell);
  }
  board.appendChild(row);
}