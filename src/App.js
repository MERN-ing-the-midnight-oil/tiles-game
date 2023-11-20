import React from "react";
import "./App.css";
import CrosswordGrid from "./components/grid";

//App is the parent component of CrosswordGrid because CrosswordGrid is rendered inside. Parents can pass props, in this case, size.
function App() {
	return (
		<div className="App">
			<CrosswordGrid size={10} />
		</div>
	);
}

export default App;
