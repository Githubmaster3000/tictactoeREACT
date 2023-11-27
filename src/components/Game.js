import React, { useState, useEffect } from "react";
import Board from "./Board";

function Game() {
  // const [history, setHistory] = useState([]);

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [moves, setMoves] = useState(0);

  //Declaring a Winner
  useEffect(() => {
    setWinner(calculateWinner());
  }, [squares]);

  //function to check if a player has won.
  //If a player has won, we can display text such as “Winner: X” or “Winner: O”.
  //Input: squares: given an array of 9 squares:'X', 'O', or null.
  const calculateWinner = () => {
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
      const userPlay = squares[a]?.value;
      if (userPlay) {
        if (squares[b]?.value === userPlay && squares[c]?.value === userPlay) {
          return userPlay;
        }
      }
    }
    return null;
  };

  //Handle player
  const handleClick = (i) => {
    let currentMove;
    if (xIsNext) {
      currentMove = "x";
    } else {
      currentMove = "o";
    }
    if (squares[i]) return;
    const tempSquares = [...squares];
    tempSquares[i] = {
      value: currentMove,
      move: parseInt(moves),
    }; //value: "x" | "o", moves
    setSquares(tempSquares);
    setXIsNext(!xIsNext);
    setMoves(moves + 1);
    // let h = [...history, i + 1];
    // setHistory(h);
  };

  //Restart game
  const handlRestart = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    // setHistory([]);
    setMoves(0);
  };

  const handleHistoryClick = (i) => {
    console.log(squares);
  };

  return (
    <div className="main">
      <h2 className="result">Winner is: {winner ? winner : "N/N"}</h2>
      <div className="game">
        <span className="player">Next player is: {xIsNext ? "X" : "O"}</span>
        <Board
          squares={squares}
          handleClick={handleClick}
          // histories={history}
          moves={moves}
          handleHistoryClick={handleHistoryClick}
        />
      </div>
      <button onClick={handlRestart} className="restart-btn">
        Restart
      </button>
    </div>
  );
}

export default Game;
