const grid = document.querySelector('.grid-container');

function createGrid() {
    for (i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-square');
        div.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'black';
        })
        grid.appendChild(div);
    }
}

function removeAllNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const slider = document.querySelector('#slider');
const sliderVal = document.querySelector('.value');

slider.addEventListener('input', () => {
    let val = document.getElementById('slider').value;
    sliderVal.textContent = val;
    removeAllNodes(grid);
    grid.setAttribute('style', `grid-template-columns: repeat(${val}, 2fr); grid-template-rows: repeat(${val}, 2fr);`);
    for (i = 0; i < val*val; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-square');
        div.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'black';
        })
        grid.appendChild(div);
    }
})

const reset = document.querySelector('.reset')

reset.addEventListener('click', () => {
    let val = document.getElementById('slider').value;
    let cell = grid.children;
    for (i = 0; i < val*val; i++){
        cell[i].style.backgroundColor = 'white';
    }
})

function randomColour() {
    let colour = Math.floor(Math.random()*16777215).toString(16);
    return '#' + colour;
}

const rainbow = document.querySelector('.rainbow')

rainbow.addEventListener('click', () => {
    let val = document.getElementById('slider').value;
    let cell = grid.children;
    for (i = 0; i < val*val; i++){
        cell[i].addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = randomColour();
        })
    }
})

const black = document.querySelector('.black')

black.addEventListener('click', () => {
    let val = document.getElementById('slider').value;
    let cell = grid.children;
    for (i = 0; i < val*val; i++){
        cell[i].addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'black';
        })
    }
})

createGrid();