const xClass = "x";
const circleClass = "circle";

const cells = document.querySelectorAll("[data-cell]");
const board = document.getElementById("board");

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
  setBoardHoverClass();
}

function placeMark(cell, curreentClass) {
  cell.classList.add(curreentClass);
}

function swapTurns() {
  circleTurn = !circleTurn;
}
function setBoardHoverClass() {
  board.classList.remove(xClass);
  board.classList.remove(circleClass);
  if (circleTurn) {
    board.classList.add(circleClass);
  } else {
    board.classList.add(xClass);
  }
}
