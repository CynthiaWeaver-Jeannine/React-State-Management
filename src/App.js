import "./App.css";
import Header from "./Header";
import Content from "./Content";
import CoinTossCounter from "./CoinTossCounter";
import React, { useState } from "react";

function App() {
	const [loggedIn, setLoggedIn] = useState(false);
	const toggleLoggedIn = () => setLoggedIn(!loggedIn);
	return (
		<>
			<div>
				<Header loggedIn={loggedIn} handleLoggedInClick={toggleLoggedIn} />
				<Content loggedIn={loggedIn} text="My content." />
				<CoinTossCounter />
			</div>
		</>
	);
}
export default App;
