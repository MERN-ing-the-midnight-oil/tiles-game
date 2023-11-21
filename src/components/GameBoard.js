import React, { useState } from "react";
import CrosswordGrid from "./CrsosswordGrid";
import LetterHand from "./LetterHand";
import LetterBag from "./LetterBag";

const GameBoard = () => {
	const [letterBag, setLetterBag] = useState(/* Initial full set of letters */);
	const [letterHand, setLetterHand] =
		useState(/* Initial set of letters for the player */);
	const [gridState, setGridState] = useState(/* Initial grid state */);

	// Functions to manage letter movement between bag, hand, and grid

	return (
		<div>
			<CrosswordGrid
				gridState={gridState}
				setGridState={setGridState}
				letterHand={letterHand}
			/>
			<LetterHand letterHand={letterHand} />
			<LetterBag letterBag={letterBag} />
		</div>
	);
};

export default GameBoard;
