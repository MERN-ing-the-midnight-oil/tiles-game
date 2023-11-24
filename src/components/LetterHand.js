import React from "react";

const LetterHand = ({
	letterHand,
	onDrawLetter,
	drawnLetter,
	isTransitioning,
}) => {
	return (
		<div className="letter-hand">
			<h3>
				This is your letter hand. Play letters from your hand by typing into the
				yellow grid. Letters will be automatically replenished from the letter
				bag when you click on "Draw Tiles".
			</h3>
			<ul>
				{letterHand.map((letter, index) => (
					<li
						key={index}
						className="tiles">
						{letter}
					</li>
				))}
				{isTransitioning && drawnLetter && (
					<li className="tiles fade-in">{drawnLetter}</li>
				)}
				{letterHand.length === 0 && !isTransitioning && (
					<li>There are no letters in your hand</li>
				)}
			</ul>
			<button onClick={onDrawLetter}>Draw Tiles</button>
		</div>
	);
};

export default LetterHand;
