/*
В JS:
1. Найди контейнер через querySelector, сохрани в переменную
2. Сделай цикл от 0 до 255 (16*16=256 клеток)
3. Внутри цикла:
   а. создай новый div через document.createElement
   б. добавь этому div класс "grid-item" (через classList.add)
   в. добавь этот div внутрь контейнера (через appendChild)

*/

const container = document.querySelector(`#container`);

function createGrid (size) {
    for (let i = 0; i < 256; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("grid-item");
        container.appendChild(newDiv);
        newDiv.addEventListener("mouseover", (e) => {
            newDiv.style.backgroundColor = "firebrick";
        });
    };
};

const rstBtn = document.querySelector('#resetBtn');

rstBtn.addEventListener("click", (e) => {
    let askUser = +prompt("How many cells should be in the grid?");
    container.innerHTML = "";
    createGrid();
});