import React from "react";

const CrosswordGrid = ({ gridSize, cellValues, setCellValues }) => {
	// Handler for input changes
	const handleCellChange = (index, newValue) => {
		const newValues = [...cellValues]; // Copies the current cellValues
		newValues[index] = newValue; // Updates the specific cell
		setCellValues(newValues); // Updates the state in GameBoard
	};

	return (
		<table>
			<tbody>
				{Array.from({ length: gridSize }).map((_, rowIndex) => (
					<tr key={rowIndex}>
						{Array.from({ length: gridSize }).map((_, colIndex) => {
							const cellIndex = rowIndex * gridSize + colIndex;
							return (
								<td
									key={`${rowIndex}-${colIndex}`}
									className="cell">
									<input
										type="text"
										maxLength="1"
										value={cellValues[cellIndex]}
										onChange={(e) =>
											handleCellChange(cellIndex, e.target.value)
										}
									/>
								</td>
							);
						})}
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default CrosswordGrid;
