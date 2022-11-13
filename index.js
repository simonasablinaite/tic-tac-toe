const xClass = "x";
const circleClass = "circle";
const winningCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [4, 4, 8],
  [2, 4, 6],
];

const winningMessage = document.getElementById("winningMessage");
const winningMessageText = document.querySelector(
  "[data-winning-message-text]"
);

const cells = document.querySelectorAll("[data-cell]");
const board = document.getElementById("board");
const restartButton = document.getElementById("restart");

let circleTurn;

startGame();

restartButton.addEventListener("click", startGame);

function startGame() {
  circleTurn = false;
  cells.forEach((cell) => {
    cell.classList.remove(xClass);
    cell.classList.remove(circleClass);
    cell.addEventListener("click", handleClick);
    // paspaudimas tik viena karta ant to paties langelio:
    cell.addEventListener("click", handleClick, { once: true });
  });
  setBoardHoverClass();
  winningMessage.classList.remove("show");
}

function handleClick(e) {
  const cell = e.target;
  const curreentClass = circleTurn ? circleClass : xClass;
  // place the Mark:
  placeMark(cell, curreentClass);
  // check for win
  if (checkWin(curreentClass)) {
    endGame(false);
    // check for draw
  } else if (isDraw()) {
    endGame(true);
    // switch turns:
  } else {
    swapTurns();
    setBoardHoverClass();
  }
}

function endGame(draw) {
  if (draw) {
    winningMessageText.innerText = "Draw!";
  } else {
    winningMessageText.innerText = `${circleTurn ? "O's" : "X's"} Wins!`;
  }
  winningMessage.classList.add("show");
}

function isDraw() {
  return [...cells].every((cell) => {
    return (
      cell.classList.contains(xClass) || cell.classList.contains(circleClass)
    );
  });
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

function checkWin(curreentClass) {
  return winningCombination.some((combination) => {
    return combination.every((i) => {
      return cells[i].classList.contains(curreentClass);
    });
  });
}
