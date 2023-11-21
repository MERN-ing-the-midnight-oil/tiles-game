import React from "react";
import "./App.css";
import GameBoard from "./components/GameBoard";

// App is the top-level component that renders the entire GameBoard
function App() {
	return (
		<div className="App">
			<GameBoard size={10} /> {/* Rendering GameBoard */}
		</div>
	);
}

export default App;
