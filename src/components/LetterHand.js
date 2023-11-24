//LetterHand.js
import React from "react";

const LetterHand = ({ letterHand, onDrawLetter }) => {
	return (
		<div className="letter-hand">
			<h3>
				This is your letter hand. Play letters from this set into the yellow
				grid. Letters will be automatically replenished from the letter bag when
				you click on "Draw from bag".{" "}
			</h3>
			<ul>
				{letterHand && letterHand.length > 0 ? (
					letterHand.map((letter, index) => <li key={index}>{letter}</li>)
				) : (
					<li>There are no letters in your hand</li>
				)}
			</ul>
			<button onClick={onDrawLetter}>Draw from bag</button>
		</div>
	);
};

export default LetterHand;
