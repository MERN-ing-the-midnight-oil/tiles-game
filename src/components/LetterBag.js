const LetterBag = ({ letterBag, drawnLetter, isTransitioning }) => {
	let fadeApplied = false; // Flag to check if the fade-out has been applied to that specific indexed letter in the bag

	return (
		<div className="letter-bag">
			<h3>
				This is the letter bag, the collection of all letters remaining that you
				may randomly draw when you click on "Draw Tiles"{" "}
			</h3>
			{letterBag.map((letter, index) => {
				// Check if this letter matches the drawnLetter and transitioning, and fade-out not yet applied
				if (letter === drawnLetter && isTransitioning && !fadeApplied) {
					fadeApplied = true; // Set flag to true to prevent applying fade-out again
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
