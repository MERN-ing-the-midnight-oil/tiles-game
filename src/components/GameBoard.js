import React, { useState } from "react";
import CrosswordGrid from "./CrosswordGrid";
import LetterHand from "./LetterHand";
import LetterBag from "./LetterBag";
import { drawRandomLetter } from "./gameUtils";
import { createInitialLetterBag } from "./gameUtils";
import { createInitialGrid } from "./gameUtils";

const size = 10; // pass this to CrosswordGrid adjust as needed

const GameBoard = () => {
	//using the useState hook to manage children's state
	const [letterBag, setLetterBag] = useState(createInitialLetterBag());
	const [letterHand, setLetterHand] = useState([]); //players hand starts with zero letter tiles
	const [gridState, setGridState] = useState(createInitialGrid);

	// Functions to manage letter movement between bag, hand, and grid are imported from gameUtils
	// Handler function to draw a letter and update states
	const handleDrawLetter = () => {
		const letter = drawRandomLetter(letterBag);
		if (letter) {
			// Add the drawn letter to the hand and remove it from the bag
			setLetterHand([...letterHand, letter]);
			setLetterBag(letterBag.filter((l) => l !== letter));
		}
	};
	return (
		<div>
			<h1>Bananarama Grams</h1>
			<CrosswordGrid
				gridSize={10}
				cellValues={gridState}
				setCellValues={setGridState}
			/>
			<LetterHand
				letterHand={letterHand}
				setLetterHand={setLetterHand}
				onDrawLetter={handleDrawLetter}
			/>
			<LetterBag
				letterBag={letterBag}
				setLetterBag={setLetterBag}
			/>
		</div>
	);
};

export default GameBoard;
