const grid = document.querySelector(".grid");

const defaultSize = 16;

createGrid(defaultSize);

function createGrid(size) {
  // Use a nested for loop to create the grid cells
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.style.width = 35 / size + "rem";
      cell.style.height = 35 / size + "rem";
      grid.appendChild(cell);
    }
  }
}
// hovers over the grid and changes the color / fills them in
grid.addEventListener("mouseover", function (e) {
  if (e.target.matches(".cell")) {
    e.target.classList.add("active");
  }
});

// // changes the size of the grid to the user's input
document.querySelector(".apply").addEventListener("click", getSize);

function getSize() {
  console.log("button clicked");
  let size = prompt("Choose your grid size, the max is 30", "0");

  console.log(size);
  while (grid.firstChild) {
    grid.removeChild(grid.lastChild);
  }
  createGrid(size);
}

// resets the grd to default settings 16 by 16 blank
const resetBtn = document.querySelector(".reset");

resetBtn.addEventListener("click", reset);

function reset() {
  while (grid.firstChild) {
    grid.removeChild(grid.lastChild);
  }
  createGrid(defaultSize);
}
