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
const rainbowBtn = document.querySelector("#rainbowBtn");
const clearBtn = document.querySelector("#clearBtn")
let currentSize = 16;

clearBtn.addEventListener("click", (e) => {
    container.innerHTML = "";
    createGrid(currentSize);
})

let rainbowMode = false;
rainbowBtn.addEventListener("click", (e) => {
    rainbowMode = !rainbowMode;
    if (rainbowMode) {
        rainbowBtn.textContent = "Rainbow mode - On!";
    } else {
        rainbowBtn.textContent = "Rainbow mode - Off!";
    }
});



function createGrid (size) {
    
    for (let i = 0; i < size * size; i++) {

        let widthAndHeight = 960 / size;
        let newDiv = document.createElement("div");
        let hoverCount = 0;

        newDiv.classList.add("grid-item");
        container.appendChild(newDiv);

        newDiv.style.width = (widthAndHeight + "px");
        newDiv.style.height = (widthAndHeight + "px");


            newDiv.addEventListener("mouseover", (e) => {
                if (rainbowMode) {
                    let red = Math.floor(Math.random() * 256);
                    let green = Math.floor(Math.random() * 256);
                    let blue = Math.floor(Math.random() * 256);
                    let RGB = `rgb(${red}, ${green}, ${blue})`;
                    newDiv.style.backgroundColor = RGB;
                } else {
                    if (hoverCount <= 10) {
                        hoverCount++;
                        let math = hoverCount / 10;
                        newDiv.style.opacity = math;
                        newDiv.style.backgroundColor = "lawngreen";
                    } else {
                        return;
                        }        };
        });
    };
};

const rstBtn = document.querySelector('#resetBtn');

rstBtn.addEventListener("click", (e) => {
    let askUser = +prompt("How many cells should be in the grid?");
    currentSize = askUser;
    if (askUser > 100) {
        alert("Way too big of a grid.")
    } else {
    container.innerHTML = "";
    createGrid(askUser);
    };
});

createGrid(16);