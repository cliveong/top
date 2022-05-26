const gridContainer = document.querySelector(".grid");

let gridSize = 16;

function gridGeneration(gridSize) {
    for(let i = 0; i < gridSize; i++) {
        const div = document.createElement("div");
        div.classList.add("row");
        
        for(let j = 0; j < gridSize; j++) {
            const pixel = document.createElement("div");
            pixel.classList.add("pixel");
            pixel.addEventListener("mouseenter", () => {
                mouseOverClicked(pixel);
            })
            div.appendChild(pixel);
        }
        gridContainer.appendChild(div);
    }
}

gridGeneration(16)


let isClicked = false;
document.body.onmousedown = () => (isClicked = true);
document.body.onmouseup = () => (isClicked = false);
function mouseOverClicked(pixel) {
    if (isClicked) {
        pixel.style.backgroundColor = "black";
    }
}

const submitButton = document.querySelector(".buttonInput");
submitButton.addEventListener("click", () => {
    gridSize = document.getElementById("inputSize").value;;
    gridContainer.innerHTML = "";
    gridGeneration(gridSize);
});

const clearAll = document.querySelector(".clearButton");
clearAll.addEventListener("click", () => {
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach((n) => n.style.backgroundColor = "white");
});