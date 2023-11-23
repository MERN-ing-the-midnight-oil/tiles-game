import React from "react";

const LetterBag = ({ letterBag, setLetterBag }) => {
	// Use 'letterBag' to render the letters
	// Use 'setLetterBag' if you need to modify the letter bag
	return (
		<div className="letter-bag">
			<h3>This is the letter bag</h3>
			{letterBag.map((letter, index) => (
				<span key={index}>{letter}</span> // Example rendering
			))}
		</div>
	);
};

export default LetterBag;
