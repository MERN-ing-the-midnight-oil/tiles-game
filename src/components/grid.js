import React, { useState } from "react";
//importing the default export which includes essential methods for defining components,etc, and the useState module from the react library

const CrosswordGrid = ({ size }) => {
	// Create an array for rows
	const rows = Array.from({ length: size });

	//each cell of the crossword grid corresponds to a table cell (<td>).
	return (
		<table>
			<tbody>
				{rows.map((_, rowIndex) => (
					<tr key={rowIndex}>
						{rows.map((_, colIndex) => (
							<td
								key={`${rowIndex}-${colIndex}`}
								className="cell">
								{/* Cell content here */}
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default CrosswordGrid;
