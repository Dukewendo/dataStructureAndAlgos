import React from "react";
import { HashRouter } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import Reviews from "./components/Reviews"


import "./App.css";

function App() {
	return (
		<HashRouter>
			<Header />
			<Main />
			<Reviews />
		</HashRouter>
	);
}

export default App;
