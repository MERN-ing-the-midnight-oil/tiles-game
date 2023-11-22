import React, { useState } from "react";

const LetterHand = () => {
	// State to hold the letters in the player's hand
	// Initially, it's an empty array. It can hold up to 7 letters.
	const [hand, setHand] = useState([]);

	return (
		<div className="letter-hand">
			<h3>The letter tiles in your hand:</h3>
			<ul>
				{hand.length === 0 ? (
					<li>No letters yet</li>
				) : (
					hand.map((letter, index) => <li key={index}>{letter}</li>)
				)}
			</ul>
		</div>
	);
};

export default LetterHand;
