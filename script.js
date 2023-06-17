const grid = document.querySelector(".grid");

for (i = 0; i < 256; i++) {
  const box = document.createElement("div");
  box.classList.add("box");
  grid.appendChild(box);
}

const boxes = document.querySelectorAll(".box");
console.log(boxes);

boxes.forEach((box) => {
  box.addEventListener("mouseover", () => {
    box.classList.add("hover");
  });
});
