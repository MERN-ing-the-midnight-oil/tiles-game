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
				yellow grid. Click on "Draw Tiles" to draw a tile from the bag, below.
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
			<button
				onClick={onDrawLetter}
				style={{
					backgroundColor: "#4CAF50", // A distinct, eye-catching color
					color: "white", // White text for contrast
					padding: "12px 20px", // Generous padding for a larger, more clickable area
					border: "none", // No border for a cleaner look
					borderRadius: "4px", // Rounded corners
					cursor: "pointer", // Cursor changes to a pointer to indicate it's clickable
					fontSize: "16px", // Larger font size for readability
					boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Subtle shadow for depth
					transition: "0.3s", // Smooth transition for hover effects
				}}>
				Draw Tiles
			</button>
		</div>
	);
};

export default LetterHand;
