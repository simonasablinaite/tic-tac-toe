const cells = document.querySelectorAll("[data-cell]");

cells.forEach((cell) => {
  // paspaudimas tik viena karta ant to paties langelio:
  cell.addEventListener("click", handleClick, { once: true });
});

function handleClick(e) {
  console.log("clicked");
}
