import React from "react";

function Square({ square, move, stop, handleClick }) {
  return (
    <button className={"square"} move={move} onClick={handleClick}>
      {stop < move ? null : square}
    </button>
  );
}

export default Square;
