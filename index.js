let onHover = (gridElement) => {
    gridElement.style.backgroundColor = 'black';
}

// Create main grid
const resetGrid = () => {
    document.querySelector('#gridContainer').remove();
    const gridContainer = document.createElement('div');
    gridContainer.id = 'gridContainer';
    document.body.appendChild(gridContainer);
}

const createGrid = (resPerSide) => {
    resetGrid();

    const gridContainer = document.querySelector('#gridContainer');
    resPerSide = Math.min(resPerSide, 100);
    for (let y = 0; y < resPerSide; y++) {
        const newRowDiv = document.createElement('div');
        newRowDiv.classList.add('row-div');
        for (let x = 0; x < resPerSide; x ++) {
            const newRowItem = document.createElement('div');
            newRowItem.classList.add('row-item-div');
            newRowItem.addEventListener('mouseover', (e) => {
                onHover(e.target);
            });
            newRowDiv.appendChild(newRowItem);
        }
        gridContainer.appendChild(newRowDiv);
    }
}

createGrid(1000);

const resetBtn = document.querySelector('#resetButton');
resetBtn.addEventListener('click', (e) => {
    console.log(e.target);
    let chosenRes = prompt('How many squares do you want per side?');
    createGrid(chosenRes);
});
