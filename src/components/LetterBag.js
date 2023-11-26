const LetterBag = ({ letterBag, drawnLetter, isTransitioning }) => {
	let fadeApplied = false; // Flag to check if the fade-out has been applied to that specific indexed letter in the bag

	return (
		<div className="letter-bag">
			<h2>This is the letter bag.</h2>{" "}
			<h3>
				These are all the letters that you might get when you "Draw A Tile"{" "}
			</h3>
			{letterBag.map((letter, index) => {
				// Check if this letter matches the drawnLetter and transitioning, and fade-out not yet applied
				if (letter === drawnLetter && isTransitioning && !fadeApplied) {
					fadeApplied = true; // Set flag to true to prevent applying fade-out again
					// Render the letter normally if it's not the drawn letter or if fade-out has already been applied
					return (
						<span
							key={index}
							className="tiles fade-out">
							{letter}
						</span>
					);
				}
				return (
					<span
						key={index}
						className="tiles">
						{letter}
					</span>
				);
			})}
		</div>
	);
};

export default LetterBag;
