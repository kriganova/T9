import React, { useState } from "react";
import "./App.css";
function App() {
  const [results, setResults] = useState([]);

  const handleClick = () => {
    const numberInput = document.getElementById("numberInput");
    const number = numberInput.value.trim();

    // Validate if the input number is empty or not a digit
    if (number === "" || !/^\d+$/.test(number)) {
      console.error("Invalid input number");
      return; // Exit early if the input is invalid
    }

    // Generate combinations of characters based on the input number
    const combinations = generateCombinations(number);

    // Set the results state
    setResults(combinations);
  };

  // Function to generate combinations of characters based on the input number
  const generateCombinations = (number) => {
    const mapping = {
      2: ["a", "b", "c"],
      3: ["d", "e", "f"],
      4: ["g", "h", "i"],
      5: ["j", "k", "l"],
      6: ["m", "n", "o"],
      7: ["p", "q", "r", "s"],
      8: ["t", "u", "v"],
      9: ["w", "x", "y", "z"],
    };

    const digits = number.split("");
    const combinations = [""];

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

  return (
    <div className="app-wrapper">
      <h1>Number to Word Converter</h1>
      <div className="input-container">
        <label className="label">Enter a number:</label>
        <input type="text" id="numberInput" />
        <button onClick={handleClick} className="button">
          Convert
        </button>
      </div>
      <div className="list">
        {/* Map the results to display */}
        <ul>
          {results.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
