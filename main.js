const grid = document.querySelector(".grid");
const apply = document.querySelector(".apply");
const resetBtn = document.querySelector(".reset");

defaultGrid = 16;
let gridSize = 16;

grid.addEventListener("mouseover", function (e) {
  if (e.target.matches(".cell")) {
    e.target.classList.add("active");
  }
});

apply.addEventListener("click", GridSizeValue);

function GridSizeValue() {
  console.log("apply button clicked");
  let gridSize = prompt("Choose the number of squares in your grid", "0");
  console.log(gridSize);
}

// Use a nested for loop to create the grid cells

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    grid.appendChild(cell);
  }
}
