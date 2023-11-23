//LetterHand.js
import React, { useState } from "react";

const LetterHand = ({ letterHand, setLetterHand, onDrawLetter }) => {
	return (
		<div className="letter-hand">
			<h3>This is your letter hand:</h3>
			<ul>
				{letterHand && letterHand.length > 0 ? (
					letterHand.map((letter, index) => <li key={index}>{letter}</li>)
				) : (
					<li>There are no letters in your hand</li>
				)}
			</ul>
			<button onClick={onDrawLetter}>
				Fill your hand with letters chosen randomly from tiles remaining in the
				bag
			</button>
		</div>
	);
};

export default LetterHand;
