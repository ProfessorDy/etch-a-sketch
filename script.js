const button = document.querySelector("button");
const grid = document.querySelector(".grid");
let elementNumber;
let boxType;

const createBoxes = (boxNumber) => {
  for (i = 0; i < elementNumber; i++) {
    const box = document.createElement("div");
    box.classList.add(boxNumber);
    box.classList.add("box");
    grid.appendChild(box);
  }

  //Hover Function
  const boxes = document.querySelectorAll(".box");

  boxes.forEach((box) => {
    box.addEventListener("mouseover", () => {
      box.classList.add("hover");
    });
  });
};

button.addEventListener("click", () => {
  grid.innerHTML = "";
  let promptValue = prompt("Insert Level i.e 1,2 or 3", "1");

  if (promptValue) {
    if (promptValue === "1" || "2" || "3" || "4") {
      if (promptValue === "1") {
        elementNumber = 256;
        boxType = "box1";
        createBoxes(boxType);
      } else if (promptValue === "2") {
        elementNumber = 1024;
        boxType = "box2";
        createBoxes(boxType);
      } else if (promptValue === "3") {
        elementNumber = 4096;
        boxType = "box3";
        createBoxes(boxType);
      }
    } else {
      alert("You have to insert 1, 2, 3 or 4");
    }
  } else {
    alert("You have to insert 1, 2, 3 or 4");
  }
});
