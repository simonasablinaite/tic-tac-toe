const xClass = "x";
const circleClass = "circle";

const cells = document.querySelectorAll("[data-cell]");

let circleTurn;

cells.forEach((cell) => {
  // paspaudimas tik viena karta ant to paties langelio:
  cell.addEventListener("click", handleClick, { once: true });
});

function handleClick(e) {
  const cell = e.target;
  const curreentClass = circleTurn ? circleClass : xClass;
  // place the Mark:
  placeMark(cell, curreentClass);
  // check for win
  // check for draw
  // switch turns:
  swapTurns();
}

function placeMark(cell, curreentClass) {
  cell.classList.add(curreentClass);
}

function swapTurns() {
  circleTurn = !circleTurn;
}
