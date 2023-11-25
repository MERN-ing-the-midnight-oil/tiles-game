# Rhys' Tiles Game

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).This program aims to simulate the popular tile placement game "bananagrams" where players put alphabet tiles down to form a crossword.

Currently a user can click on a grid space and type a letter which uses state to persist until page re-load.

This project shows that I can use and understand useState, useRef, and useEffect hooks.

Please take a look at my comments in "grid.js" which explain, in my own words, how useState works to update the array of values in my crossword grid.

Conceptual Wireframe for CrosswordGrid.js
Grid Structure:

Visualize the grid as a matrix of cells, each represented by an input element. This grid is dynamically generated based on gridSize.
State Management:

There are two key pieces of state:
selectedCell: Indicates the currently selected cell in the grid.
inputDirection: Stores the current direction of input, either "right" or "down".
Refs Array:

Imagine a parallel structure to the grid, an array called cellRefs. Each element in this array is a ref corresponding to a cell in the grid, allowing direct DOM access.
Event Handlers:

handleCellChange: This function is triggered when a user types in a cell. It updates the cell's value and calculates the next cell based on inputDirection.
handleCellClick: Invoked when a cell is clicked, it toggles inputDirection and updates selectedCell.
useEffect for Focus Management:

Picture useEffect as a watcher that reacts when selectedCell changes. It accesses the corresponding ref in cellRefs and sets focus to the new cell.
Direction Indicators:

Each cell displays a directional indicator (">" or "V") if it's the selected cell, providing visual feedback on the input direction.
Data Flow:

User interactions (typing, clicking) trigger event handlers, which update the component's state (selectedCell, inputDirection).
State changes prompt the component to re-render, updating the grid display and refocusing cells as needed.
useEffect responds to state changes by managing focus, ensuring the user's interaction flow is smooth and intuitive.
Overall Interaction
A user clicks on a cell, triggering handleCellClick, which sets the input direction and selected cell.
The user types in a cell, triggering handleCellChange, which updates the cell value and calculates the next cell to select.
useEffect observes these changes and automatically shifts focus to the new selectedCell.
