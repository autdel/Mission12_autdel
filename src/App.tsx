import React from 'react';
import './App.css';
import { Teams } from './Teams';

// App function that returns the header and all teams info loaded on Teams.js
function App() {
  return (
    // Header info and teams displayed within the main div for the page
    <div className="App">
      <header className="App-header">
        <h1>NCAA Basketball Teams</h1>
        <Teams />
      </header>
    </div>
  );
}

export default App;
