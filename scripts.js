const container = document.querySelector('.container');

for (let j = 0; j < 16*16; j++) {
    const square = document.createElement('div');
    square.classList.add('square');

    container.appendChild(square);
}