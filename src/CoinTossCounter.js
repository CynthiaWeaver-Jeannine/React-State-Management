import React, { useState } from "react";

function CoinTossCounter() {
	const [results, setResults] = useState([]);
	const [count, setCount] = useState({ H: 0, T: 0 });
	const handleClick = (value) => {
		setResults([...results, value]);
		setCount({
			...count,
			[value]: count[value] + 1,
		});
		console.table(count);
	};

	const lis = results.map((result, index) => (
		<li key={`toss-${index}`}>{result === "H" ? "Heads" : "Tails"}</li>
	));
	const handleDeleteLast = () => {
		const last = results[results.length - 1];
		const list = results.slice(0, -1);

		setResults(list);
		if (last) {
			setCount({ ...count, [last]: count[last] - 1 });
		}
	};
	return (
		<section>
			<div>
				<button onClick={() => handleClick("H")}>Heads</button>
				<button onClick={() => handleClick("T")}>Tails</button>
			</div>
			<ul>{lis}</ul>
			<button onClick={handleDeleteLast}>Delete Last</button>
			<ul>
				<li>Heads: {count["H"]}</li>
				<li>Tails: {count["T"]}</li>
			</ul>
		</section>
	);
}
export default CoinTossCounter;
