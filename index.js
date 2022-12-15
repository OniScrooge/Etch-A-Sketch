/*
Create a container for the grid in the DOM

Call reverse when hover ends

Create eventListener for 'hover' on cells
    Call function to change grid color leaving pixelated trail

Create button for new grid
Create eventListener for 'click'
    Call function for number of cells

Create a setNumberOfCells function
    Prompt user for a number of cells
    Check for valid input (is number, is less than 100, is more than 0)
    Call columns function with input as parameter

Create a rows function with input parameter
    Make a for loop with value at 0 that continues so long as value is less than input
    Create a div for each iteration with a classname
    Once for loop ends, end the row for a new one to start

Create a columns function with input parameter
    Make a for loop with value at 0 that continues so long as value is less than input
    Call rows function for each iteration
*/

function setNumberOfCells()
{
    let cellNumber = Number(prompt("Type a number for grid size"));
    while (cellNumber > 100 || cellNumber <= 0 || cellNumber / 1 !== cellNumber)
    {
        cellNumber = Number(prompt("Type a number for grid size"));
    }

    makeGrid(cellNumber);
}

function makeGrid(input)
{
    const elements = document.getElementsByClassName('cell');
    if (!elements)
    {
    }
    else
    {
        while (elements.length > 0)
        {
            elements[0].parentNode.removeChild(elements[0]);
        }
    }

    gridContainer.style.setProperty('--grid-rows', input);
    gridContainer.style.setProperty('--grid-columns', input);

    for (let count = 0; count < (input ** 2); ++count)
    {
        let cell = document.createElement('div');
        cell.style.setProperty('transition', 'all .07s');
        gridContainer.appendChild(cell).className = 'cell';
    }

    var onHover = function() {
        this.style.background = 'red';
    };

    var outHover = function() {
        this.style.background = 'white';
    }

    let gridCells = document.getElementsByClassName('cell');
    for (let index = 0; index < gridCells.length; ++ index)
    {
        gridCells[index].addEventListener('mouseover', onHover);
        gridCells[index].addEventListener('mouseout', outHover);
    }
}

const gridButton = document.getElementById('gridButton');
gridButton.addEventListener('click', setNumberOfCells);
document.body.appendChild(gridButton);

const gridContainer = document.getElementById("gridContainer");