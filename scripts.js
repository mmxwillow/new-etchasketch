const container = document.querySelector('.container');

for (let j = 0; j < 16 * 16; j++) {
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

