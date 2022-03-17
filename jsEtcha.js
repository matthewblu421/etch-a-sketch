function defaultGrid() {
  for (let i = 0; i <= 255; i++) {
    const squarecontainer = document.querySelector(".squarecontainer");
    const div = document.createElement("div");
    div.classList.add("cells");
    squarecontainer.appendChild(div);
  }
}

defaultGrid();

function clearGrid() {
  const cells = document.querySelectorAll(".cells");
  cells.forEach((cell) => {
    cell.remove();
  });
}

function newGrid() {
  const btn = document.querySelector(".reset");
  btn.addEventListener("click", function () {
    let num = prompt("Enter number of squares of height and width");
    if (num <= 100 && num > 0) {
      let numOfSquares = num * num;
      let percent = 100 / num;
      clearGrid();
      for (let i = 0; i < numOfSquares; i++) {
        const container = document.querySelector(".squarecontainer");
        let newCell = document.createElement("div");
        container.appendChild(newCell);
        newCell.classList.add("cells");
        newCell.style.width = percent + "%";
        newCell.style.height = percent + "%";
      }
      addColorChanger();
    }
  });
}
newGrid();

function addColorChanger() {
  let cells = document.querySelectorAll(".cells");

  cells.forEach((cell) => {
    cell.addEventListener("mouseover", function () {
      cell.style.backgroundColor = "black";
    });
  });
}

addColorChanger();
