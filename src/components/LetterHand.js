import React from "react";

const LetterHand = ({
	letterHand,
	onDrawLetter,
	drawnLetter,
	isTransitioning,
	playedLetter,
}) => {
	return (
		<div className="letter-hand">
			<h3>
				This is your letter hand. Play letters from your hand by typing into the
				yellow grid. Click on "Draw Tiles" to draw a tile from the "bag", below.
			</h3>
			<ul>
				{letterHand.map((letter, index) => (
					<li
						key={index}
						className={`tiles ${
							letter === playedLetter && isTransitioning ? "fade-out" : ""
						}`}>
						{letter}
					</li>
				))}
				{/* Fade-in effect for the newly drawn letter during transition */}
				{isTransitioning && drawnLetter && (
					<li className="tiles fade-in">{drawnLetter}</li>
				)}
				{/* Display message when there are no letters in the hand */}
				{letterHand.length === 0 && !isTransitioning && (
					<li>There are no letters in your hand</li>
				)}
			</ul>
			<button
				onClick={onDrawLetter}
				style={{
					backgroundColor: "#4CAF50",
					color: "white", // White text
					padding: "12px 20px",
					border: "none", // No border for a cleaner look
					borderRadius: "4px",
					cursor: "pointer", // Cursor changes to a pointer to indicate it's clickable
					fontSize: "16px",
					boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Subtle shadow
					transition: "0.3s", // Smooth transition for hover effects
				}}>
				Draw Tiles
			</button>
		</div>
	);
};

export default LetterHand;
