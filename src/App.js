import React from 'react';
import Grid from './components/Grid';
import './App.css';

// Main App component
function App() {
  return (
    <div className="App">
      {/* Header with title */}
      <header className="App-header">
        <h1>Matrix Visualization</h1>
        {/* Render the Grid component */}
        <Grid />
      </header>
    </div>
  );
}

export default App;
