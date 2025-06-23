const cards = ['A','A','B','B','C','C','D','D'];
let chosen = [];
let matched = [];
cards.sort(() => 0.5 - Math.random());
const grid = document.getElementById("grid");

cards.forEach((val, i) => {
  const card = document.createElement("div");
  card.className = "card";
  card.dataset.value = val;
  card.dataset.index = i;
  card.textContent = "?";
  card.onclick = () => {
    if (matched.includes(i) || chosen.length === 2 || card.textContent !== "?") return;
    card.textContent = val;
    chosen.push({val, i});
    if (chosen.length === 2) {
      if (chosen[0].val === chosen[1].val && chosen[0].i !== chosen[1].i) {
        matched.push(chosen[0].i, chosen[1].i);
      } else {
        setTimeout(() => {
          document.querySelectorAll(".card").forEach(c => {
            if (!matched.includes(+c.dataset.index)) c.textContent = "?";
          });
        }, 500);
      }
      chosen = [];
    }
  };
  grid.appendChild(card);
});