// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// src/App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div className="app">
      <h1>Item List Manager</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter item"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
      <ul className="item-list">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;


// src/App.css
.app {
  text-align: center;
  font-family: Arial, sans-serif;
  padding: 20px;
}

.input-container {
  margin: 20px 0;
}

input {
  padding: 10px;
  font-size: 16px;
  width: 200px;
  margin-right: 10px;
}

button {
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
}

.item-list {
  list-style-type: none;
  padding: 0;
}

.item-list li {
  margin: 5px 0;
  font-size: 18px;
}


// src/index.css
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
}
