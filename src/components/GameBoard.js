import React, { useState } from "react";
import CrosswordGrid from "./CrosswordGrid";
import LetterHand from "./LetterHand";
import LetterBag from "./LetterBag";
import {
	drawRandomLetter,
	createInitialLetterBag,
	createInitialGrid,
	removeOneLetter,
} from "./gameUtils";

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
			// Add the drawn letter to the hand...
			setLetterHand([...letterHand, letter]);
			//...and remove it from the bag
			setLetterBag(removeOneLetter(letterBag, letter));
		}
	};
	return (
		<div>
			<h1>Bananarama Grams</h1>

			<div
				style={{
					border: "1px solid #ccc",
					boxShadow: "0px 0px 10px #eee",
					margin: "10px",
					padding: "10px",
				}}>
				<CrosswordGrid
					gridSize={10}
					cellValues={gridState}
					setCellValues={setGridState}
				/>
			</div>

			<div
				style={{
					border: "1px solid #ccc",
					boxShadow: "0px 0px 10px #eee",
					margin: "10px",
					padding: "10px",
				}}>
				<LetterHand
					letterHand={letterHand}
					setLetterHand={setLetterHand}
					onDrawLetter={handleDrawLetter}
				/>
			</div>

			<div
				style={{
					border: "1px solid #ccc",
					boxShadow: "0px 0px 10px #eee",
					margin: "10px",
					padding: "10px",
				}}>
				<LetterBag
					letterBag={letterBag}
					setLetterBag={setLetterBag}
				/>
			</div>
		</div>
	);
};

export default GameBoard;
