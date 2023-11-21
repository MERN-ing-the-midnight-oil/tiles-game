//importing the default export which includes essential methods for defining components,etc, and the useState module from the react library
import React, { useState } from "react";

//receiving size from parent component
const CrosswordGrid = ({ size }) => {
	//the following "const [cellValues, setCellValues" can be thought of as const cellValues = stateArray[0]; const setCellValues = stateArray[1];
	//useState gets the initial state, which is an array filled with empty strings
	// setCellValues is the state setter function. all it does is update the state with whatever you give it.
	const [cellValues, setCellValues] = useState(Array(size * size).fill(""));

	// Handler for input changes
	// defintes handleInputChange as a function that takes two paramenters, index, the position of the cell being changed, and newValue, the new string entered into the cell
	const handleCellChange = (index, newValue) => {
		// Creates a new array with updated value, newValues, gives it the spread (copy) of the cellValues array
		const newValues = [...cellValues];

		//... and then updates the particular element at the 'index' position in the newValues array with newValue which effectively updates the value of the specified cell.
		newValues[index] = newValue;

		//setCellValues  is the setter fucttion for the cellValues state, which is provided by the useState hook.Calling it updates the cellValues state and triggers a re-render of the component
		setCellValues(newValues); // Update state
	};

	return (
		// Creating a table element, which is the container for the grid
		<table>
			<tbody>
				{
					// Creating an array of 'size' length and mapping over it to generate rows
					Array.from({ length: size }).map((_, rowIndex) => (
						// Each table row is represented by a tr element, Unique key for each row for React's rendering optimization
						<tr key={rowIndex}>
							{" "}
							{
								// Creating an array of 'size' length for each row to generate cells
								Array.from({ length: size }).map((_, colIndex) => {
									// Calculating the index of the cell in the cellValues state array
									const cellIndex = rowIndex * size + colIndex;

									// Return a cell (td) for each column in the current row
									return (
										// Each cell of the grid is represented by a td element
										<td
											key={`${rowIndex}-${colIndex}`}
											className="cell">
											{" "}
											{/* Unique key for each cell , Input element for user to enter data*/}
											<input
												type="text"
												maxLength="1" // Limiting input to one character
												value={cellValues[cellIndex]} // Binding the value to the corresponding state
												onChange={(e) =>
													handleCellChange(cellIndex, e.target.value)
												} // Updating state when input changes
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
