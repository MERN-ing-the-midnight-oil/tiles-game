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

const GameBoard = () => {
	//using the useState hook to manage children's state
	const [letterBag, setLetterBag] = useState(createInitialLetterBag());
	const [letterHand, setLetterHand] = useState([]); //players hand starts with zero letter tiles
	const [gridState, setGridState] = useState(createInitialGrid);
	const [drawnLetter, setDrawnLetter] = useState(null);
	const [isTransitioning, setIsTransitioning] = useState(false);
	const [playedLetter, setPlayedLetter] = useState(null);

	// Handler function to draw a letter and update states
	const handleDrawLetter = () => {
		//letter gets the result of performing drawRandomLetter to the current state of LetterBag which returns a single randomly selected letter
		const letter = drawRandomLetter(letterBag);
		if (letter) {
			// Set the randomly drawn letter and start the transition
			setDrawnLetter(letter);
			setIsTransitioning(true);

			// After 1 second (once the fade-out animation completes)...
			setTimeout(() => {
				// Add the drawn letter to the hand
				setLetterHand((prevHand) => [...prevHand, letter]);

				// Remove the drawn letter from the bag.
				setLetterBag((prevBag) => removeOneLetter(prevBag, letter));

				// End the transition and reset the drawn letter state
				setIsTransitioning(false);
				setDrawnLetter(null);
			}, 2000); // Duration should match the CSS fade-out animation
		}
	};
	//Handler function that updates states when a letter is played on the grid.
	//playedLetter should be given to handlePlayLetter whenever a user successfully types a new letter in the grid.
	const handlePlayLetter = (playedLetter) => {
		//Set the letter played in the grid that must be removed from the hand
		setPlayedLetter(playedLetter);
		setIsTransitioning(true);
		setTimeout(() => {
			setLetterHand((prevHand) => removeOneLetter(prevHand, playedLetter)); //TODO: verify removeOneLetter util will work here the same way it does removing a drawn letter from the bag in handleDrawLetter-
			setIsTransitioning(false);
			setPlayedLetter(null);
		}, 2000);
	};

	return (
		<div>
			<h1>Bananarama Grams </h1>
			<h2>by Rhys Smoker</h2>
			<h3>
				A React app that demonstrates props, lifting state, useState, useRef,
				and useEffect.
				<a href="https://github.com/MERN-ing-the-midnight-oil/tiles-game">
					Github Repository
				</a>
			</h3>

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
					letterHand={letterHand}
					setPlayedLetter={setPlayedLetter} //to use when the user enters a letter into the grid
					onPlayLetter={handlePlayLetter}
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
					onDrawLetter={handleDrawLetter}
					drawnLetter={drawnLetter}
					isTransitioning={isTransitioning}
					playedLetter={playedLetter} //LetterHand needs this to know which letter to delete
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
					drawnLetter={drawnLetter}
					isTransitioning={isTransitioning}
				/>
			</div>
		</div>
	);
};

export default GameBoard;
