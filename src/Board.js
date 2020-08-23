import React, {useState} from 'react';
import './Board.scss'
import logo from "./logo.svg";

const Board = () => {
  const [location, setLocation] = useState([1,2]);
  return (
    <div className="board-wrapper">
      <div className="board-container">

        {[...Array(8).keys()].map((row) => {
            return [...Array(10).keys()].map((col) => {
              return <div
                key={`board-squareR${row+1}C${col+1}`}
                className={`board-square row-${row+1} col-${col+1}`}
                onClick={() => setLocation([row+1, col+1])}
              />
            })
          }
        )}

      </div>
      <div className={`square-member row-${location[0]} col-${location[1]}`}>
        <img src={logo} className="board-piece" alt="logo" />
      </div>
    </div>
  );
};

export default Board;
