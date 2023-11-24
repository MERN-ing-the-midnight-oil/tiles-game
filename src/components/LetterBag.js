import React from "react";

const LetterBag = ({ letterBag, selectedLetter, isTransitioning }) => {
	return (
		<div className="letter-bag">
			{letterBag.map((letter, index) => (
				<span
					key={index}
					className={
						selectedLetter === letter && isTransitioning
							? "tiles fade-out"
							: "tiles"
					}>
					{letter}
				</span>
			))}
		</div>
	);
};

export default LetterBag;
