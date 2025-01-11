import React, { useState } from 'react';
import './App.css';

function App() {
  // State for storing the list of items
  const [items, setItems] = useState([]);
  // State for storing the current input value
  const [inputValue, setInputValue] = useState('');

  // Handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Handle the add item button click
  const handleAddItem = () => {
    // If the input is not empty, add it to the list
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue(''); // Clear the input field
    }
  };

  return (
    <div className="App">
      <h1>Item List Manager</h1>
      <h2>Item List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter item"
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
    </div>
  );
}

export default App;
