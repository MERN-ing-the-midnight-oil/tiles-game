import React, { useState } from "react";
import CrosswordGrid from "./CrosswordGrid";
import LetterHand from "./LetterHand";
import LetterBag from "./LetterBag";
import { drawRandomLetter } from "./gameUtils";
import { createInitialLetterBag } from "./gameUtils";

const size = 10; // pass this to CrosswordGrid adjust as needed

const GameBoard = () => {
	//set the state of the letter bag using the util to give the initial to give the letter bag all the scrabble letters
	const [letterBag, setLetterBag] = useState(createInitialLetterBag());
	const [letterHand, setLetterHand] = useState([]); //players hand starts with zero letter tiles
	//todo: if we are doing gridState here, remove useState from CrosswordGrid.js?
	const [gridState, setGridState] = useState(/* Initial grid state */);

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
				gridSize={size} //props sent down
				gridState={gridState}
				setGridState={setGridState}
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
