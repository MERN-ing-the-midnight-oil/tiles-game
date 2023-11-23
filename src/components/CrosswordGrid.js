//importing the default export which includes essential methods for defining components,etc, and the useState module from the react library
import React, { useState } from "react";

//receiving size from parent component
const CrosswordGrid = ({ gridSize }) => {
	//the following "const [cellValues, setCellValues" can be thought of as const cellValues = stateArray[0]; const setCellValues = stateArray[1];
	//useState gets the initial state, which is an array filled with empty strings
	// setCellValues is the state setter function. all it does is update the state with whatever you give it.
	//const [cellValues, setCellValues] = useState(Array(size * size).fill(""));
	const [cellValues, setCellValues] = useState(Array(100).fill(""));
	// Handler for input changes
	// defintes handleInputChange as a function that takes two paramenters, index, the position of the cell being changed, and newValue, the new string entered into the cell
	const handleCellChange = (index, newValue) => {
		const newValues = [...cellValues]; // Creates a new array to mutate called newValues, starts if off with the spread (copy) of the original cellValues array

		//... and then updates the particular element at the 'index' position in the newValues array with the specific newValue which is given e.target.value
		newValues[index] = newValue;

		//setCellValues  is then passed the entire newValues array, and useState works it's under-the-hood magic, replacing "cellValues" with "setCellValues"
		setCellValues(newValues); // Update state
	};

	return (
		// Creating a table element, which is the container for the grid
		<table>
			<tbody>
				{
					// Creating an array of 'size' length and mapping over it to generate rows
					Array.from({ length: gridSize }).map((_, rowIndex) => (
						// Each table row is represented by a tr element, Unique key for each row for React's rendering optimization
						<tr key={rowIndex}>
							{" "}
							{
								// Creating an array of 'size' length for each row to generate cells
								Array.from({ length: gridSize }).map((_, colIndex) => {
									// Calculating the index of the cell in the cellValues state array
									const cellIndex = rowIndex * gridSize + colIndex;

									// Return a cell (td) for each column ins the current row
									return (
										// Each cell of the grid is represented by a td element
										<td
											key={`${rowIndex}-${colIndex}`}
											className="cell">
											{/* Unique key for each cell , Input element for user to enter data*/}
											<input
												type="text"
												maxLength="1" // Limiting input to one character
												value={cellValues[cellIndex]}
												//the moment a user types a character, the build-in event handler is triggered
												onChange={(e) =>
													handleCellChange(cellIndex, e.target.value)
												} // passes the arguments cellIndex and target.value to handleCellChange which makes a copy of the old state and pastes the new target vales into a new cellValues array and gives it to useState to make the update
											/>
										</td>
									);
								})
							}
						</tr>
					))
				}
			</tbody>
		</table>
	);
};

export default CrosswordGrid;
