import React, { useEffect, useState } from "react";
import Square from "./Square";

export default function Board({
  squares,
  handleClick,
  moves,
  handleHistoryClick,
}) {
  useEffect(() => {
    setStop(moves);
  }, [moves]);
  const [stop, setStop] = useState(0);

  return (
    <div className="board">
      <div>
        <div className="board-row">
          <Square
            square={squares[0]?.value}
            move={squares[0]?.move}
            stop={stop}
            handleClick={() => handleClick(0)}
          />
          <Square
            square={squares[1]?.value}
            move={squares[1]?.move}
            stop={stop}
            handleClick={() => handleClick(1)}
          />
          <Square
            square={squares[2]?.value}
            move={squares[2]?.move}
            stop={stop}
            handleClick={() => handleClick(2)}
          />
        </div>
        <div className="board-row">
          <Square
            square={squares[3]?.value}
            move={squares[3]?.move}
            stop={stop}
            handleClick={() => handleClick(3)}
          />
          <Square
            square={squares[4]?.value}
            move={squares[4]?.move}
            stop={stop}
            handleClick={() => handleClick(4)}
          />
          <Square
            square={squares[5]?.value}
            move={squares[5]?.move}
            stop={stop}
            handleClick={() => handleClick(5)}
          />
        </div>
        <div className="board-row">
          <Square
            square={squares[6]?.value}
            move={squares[6]?.move}
            stop={stop}
            handleClick={() => handleClick(6)}
          />
          <Square
            square={squares[7]?.value}
            move={squares[7]?.move}
            stop={stop}
            handleClick={() => handleClick(7)}
          />
          <Square
            square={squares[8]?.value}
            move={squares[8]?.move}
            stop={stop}
            handleClick={() => handleClick(8)}
          />
        </div>
      </div>

      <div className="history">
        <h1> History</h1>
        <ul>
          {Array(moves)
            .fill(1)
            .map((child, index) => (
              <li key={index}>
                <button onClick={() => setStop(index)}>
                  go to move #{index+1}
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
