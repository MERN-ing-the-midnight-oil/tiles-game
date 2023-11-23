// Function to create the initial letter bag
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
export const createInitialLetterBag = () => {
	let initialLetterBag = [];
	for (const [letter, count] of Object.entries(letterDistribution)) {
		for (let i = 0; i < count; i++) {
			initialLetterBag.push(letter);
		}
	}
	return initialLetterBag;
};

// Function to draw a random letter from the letter bag into the hand
export const drawRandomLetter = (letterBag) => {
	if (letterBag.length === 0) {
		return null; // or handle the empty bag case as needed
	}

	const randomIndex = Math.floor(Math.random() * letterBag.length);
	return letterBag[randomIndex];
};
