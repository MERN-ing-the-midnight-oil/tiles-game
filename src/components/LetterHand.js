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
			<h2>This is your letter hand.</h2>
			<h3>
				These letters may be typed into the yellow grid. Click on "Draw Tiles"
				to randomly collect a new letter from the letter bag.
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
					<li style={{ color: "red" }}>There are no letters in your hand</li>
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
				Draw A Tile
			</button>
		</div>
	);
};

export default LetterHand;
