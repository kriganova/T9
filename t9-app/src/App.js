import React, { useState } from 'react';
import Keypad from './Keypad';
import './App.css';

function App() {
	const [results, setResults] = useState([]);
	const [inputValue, setInputValue] = useState('');
	const [showResults, setShowResults] = useState(false);
	const [keypadVisibility, setKeypadVisibility] = useState(false);

	const handleClick = (number) => {
		setInputValue((prevInputValue) => prevInputValue + number);
	};

	const handleConvert = () => {
		const number = inputValue.trim();

		// Validate if the input number is empty or not a digit
		if (number === '' || !/^\d+$/.test(number)) {
			console.error('Invalid input number');
			return; // Exit early if the input is invalid
		}

		// Generate combinations of characters based on the input number
		const combinations = generateCombinations(number);

		// Set the results state
		setResults(combinations);
		setShowResults(true);
		setKeypadVisibility((prevVisibility) => !prevVisibility);
	};

	// Function to generate combinations of characters based on the input number
	const generateCombinations = (number) => {
		const mapping = {
			2: ['a', 'b', 'c'],
			3: ['d', 'e', 'f'],
			4: ['g', 'h', 'i'],
			5: ['j', 'k', 'l'],
			6: ['m', 'n', 'o'],
			7: ['p', 'q', 'r', 's'],
			8: ['t', 'u', 'v'],
			9: ['w', 'x', 'y', 'z'],
		};

		const digits = number.split('');
		const combinations = [''];

		digits.forEach((digit) => {
			const letters = mapping[digit] || [];
			const newCombinations = [];

			combinations.forEach((combination) => {
				letters.forEach((letter) => {
					newCombinations.push(combination + letter);
				});
			});

			combinations.length = 0; // Clear the combinations array
			combinations.push(...newCombinations);
		});

		return combinations;
	};

	const handleClean = () => {
		setResults([]);
		setInputValue('');
		setShowResults(false);
	};

	const showKeypad = () => {
		setKeypadVisibility((prevVisibility) => !prevVisibility);
	};

	return (
		<div className="app-wrapper">
			<h1>Number to Word Converter</h1>
			<div className="input-container">
				<label className="label">Enter a number:</label>
				<input
					type="text"
					id="numberInput"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					readOnly
				/>
				<button onClick={showKeypad} className="keypad-button">
					Keypad
				</button>
			</div>
			{keypadVisibility && <Keypad handleClick={handleClick} />}
			<button onClick={handleConvert} className="button">
				Convert
			</button>

			{showResults && (
				<div className="list">
					{/* Map the results to display */}
					<ul>
						{results.map((result, index) => (
							<li key={index}>{result}</li>
						))}
					</ul>
					{showResults && (
						<button onClick={handleClean} className="button">
							Clean
						</button>
					)}
				</div>
			)}
		</div>
	);
}

export default App;
