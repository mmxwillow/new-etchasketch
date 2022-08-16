const container = document.querySelector('.container');
const radio = Array.from(document.querySelectorAll('input'));

let gridsize = 0;

radio.forEach(option => {
    if(option.checked) gridsize = option.value;
    option.addEventListener('click', () =>{
        gridsize = option.value;
        deleteGrid();
        createGrid(gridsize);
    })
});

function createGrid(gridsize){
    container.style.gridTemplateColumns = `repeat(${gridsize},1fr)`;

    for (let j = 0; j < gridsize * gridsize; j++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseover', () => {
            let r = Math.floor(Math.random() * (255 - 100)) + 100;
            let g = Math.floor(Math.random() * (255 - 100)) + 100;
            let b = Math.floor(Math.random() * (255 - 100)) + 100;
            square.style.background = `rgb(${r},${g},${b})`;
        })
    
        container.appendChild(square);
    }
}

function deleteGrid(){
    container.innerHTML = "";
}

createGrid(gridsize);
