const container = document.querySelector('.container');
const radio = Array.from(document.querySelectorAll('input'));
const clear = document.querySelector('#clear');

let gridsize = 0;

clear.addEventListener('click', clearGrid)

radio.forEach(option => {
    if (option.checked) gridsize = option.value;
    option.addEventListener('click', () => {
        gridsize = option.value;
        deleteGrid();
        createGrid(gridsize);
    })
});

function createGrid(gridsize) {
    container.style.gridTemplateColumns = `repeat(${gridsize},1fr)`;

    for (let j = 0; j < gridsize * gridsize; j++) {
        const square = document.createElement('div');

        square.classList.add('square');
        square.addEventListener('mouseover', changeColor);
        square.addEventListener('touchstart', changeColor);

        container.appendChild(square);
    }
}

function changeColor(e) {
    let r = Math.floor(Math.random() * (255 - 100)) + 100;
    let g = Math.floor(Math.random() * (255 - 100)) + 100;
    let b = Math.floor(Math.random() * (255 - 100)) + 100;
    e.target.style.background = `rgb(${r},${g},${b})`;
}

function clearGrid() {
    const squares = Array.from(document.querySelectorAll('.square'));

    squares.forEach(square => {
        square.style.backgroundColor = "white";
    });
}

function deleteGrid() {
    container.innerHTML = "";
}

createGrid(gridsize);
