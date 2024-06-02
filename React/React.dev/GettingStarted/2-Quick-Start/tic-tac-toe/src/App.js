import './App.css';
import Square from './Square/Square';
import { useState } from 'react';

function App() {
  const [xIsNext, setXIsNext] = useState("X");
  const [value, setValue] = useState(Array(9).fill(null));

  function handleClick(index) {
    value[index] = xIsNext;
    setValue(value);
    xIsNext === "X" ? setXIsNext("O") : setXIsNext("X");

    setTimeout(() => {
      let winner = checkWinner(value);
      if(winner != null) {
        alert(`${winner} won the game.`);
        setValue(Array(9).fill(null));
        setXIsNext("X");
      }
    },1); 
  }

  function checkWinner(value){
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (value[a] && value[a] === value[b] && value[a] === value[c]) {
        return value[a];
      }
    }
    return null;
  }

  return (
    <div className="board">
      <div className="board-row">
        <Square value={value[0]} onClick={() => handleClick(0)} />
        <Square value={value[1]} onClick={() => handleClick(1)} />
        <Square value={value[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={value[3]} onClick={() => handleClick(3)} />
        <Square value={value[4]} onClick={() => handleClick(4)} />
        <Square value={value[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={value[6]} onClick={() => handleClick(6)} />
        <Square value={value[7]} onClick={() => handleClick(7)} />
        <Square value={value[8]} onClick={() => handleClick(8)} />
      </div>
    </div>
  );
}

export default App;
