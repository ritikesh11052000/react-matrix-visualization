import React, { useState } from 'react';
import './Grid.css';

// Grid component that renders a 10x10 interactive grid
function Grid() {
  // State to track which cells are active (toggled)
  // Initialize a 10x10 array with all false (default color)
  const [grid, setGrid] = useState(Array(10).fill().map(() => Array(10).fill(false)));

  // Function to handle cell click: toggle the state of the clicked cell
  const handleCellClick = (row, col) => {
    const newGrid = grid.map((gridRow, r) =>
      gridRow.map((cell, c) => (r === row && c === col ? !cell : cell))
    );
    setGrid(newGrid);
  };

  return (
    <div className="grid">
      {/* Render 10 rows */}
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="grid-row">
          {/* Render 10 cells per row */}
          {row.map((cell, colIndex) => (
            <div
              key={colIndex}
              className={`grid-cell ${cell ? 'active' : 'default'}`}
              onClick={() => handleCellClick(rowIndex, colIndex)}
            >
              {/* Optional: Display row,col for debugging */}
              {/* {rowIndex},{colIndex} */}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Grid;
