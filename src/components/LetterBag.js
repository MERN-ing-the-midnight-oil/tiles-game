import React from "react";

const LetterBag = () => {
	// Define the distribution of letters
	const letterDistribution = {
		A: 9,
		B: 2,
		C: 2,
		D: 4,
		E: 12,
		F: 2,
		G: 3,
		H: 2,
		I: 9,
		J: 1,
		K: 1,
		L: 4,
		M: 2,
		N: 6,
		O: 8,
		P: 2,
		Q: 1,
		R: 6,
		S: 4,
		T: 6,
		U: 4,
		V: 2,
		W: 2,
		X: 1,
		Y: 2,
		Z: 1,
	};

	// Create the letter bag array
	let letterBag = [];
	for (const [letter, count] of Object.entries(letterDistribution)) {
		for (let i = 0; i < count; i++) {
			letterBag.push(letter);
		}
	}
	console.log(letterBag);
	return (
		<div className="letter-bag">
			{letterBag.map((letter, index) => (
				<span key={index}>{letter}</span>
			))}
		</div>
	);
};

export default LetterBag;
