/*
Create a container for the grid in the DOM

Create eventListener for 'hover'
    Call function to change grid color leaving pixelated trail

Call reverse when hover ends

Create a button for new grid
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