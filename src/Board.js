import React, {useReducer, useState} from 'react';
import './Board.scss'
import logo from "./logo.svg";
import {PIECE_ACTIONS, piecesInitialState, piecesReducer} from './reducers/piecesReducer';

const Piece = (props) => {
  const {clickHandler, pieceData, id} = props; //TODO: bind id to clickhandler so it doesn't need to b ehere
  return (
    <div className={`square-member row-${pieceData.location[0]} col-${pieceData.location[1]}`}
         onClick={() => clickHandler(id)}
    >
      <img src={logo} className="board-piece" alt="logo" /> {id}
      <span>{pieceData.type}</span>
    </div>
  )
}

const Board = () => {
  const [selected, setSelected] = useState(null);
  const [piecesState, piecesDispatch] = useReducer(piecesReducer, piecesInitialState(), piecesInitialState)


  const onSquareClick = (location) => {
    if (selected !== null) {
      //clear clicked square

      //move selected pc here
      piecesDispatch({
        type: PIECE_ACTIONS.MOVE,
        id: selected,
        location
      })

      //deselect
      setSelected(null);
    } else {
      //check for piece
      //select piece
    }
  }

  return (
    <div className="board-wrapper">
      <div className="board-container">

        {[...Array(8).keys()].map((row) => {
            return [...Array(10).keys()].map((col) => {
              return <div
                key={`board-squareR${row+1}C${col+1}`}
                className={`board-square row-${row+1} col-${col+1}`}
                onClick={() => onSquareClick([row+1, col+1])}
              />
            })
          }
        )}

      </div>
      <div className={`square-member row-${piecesState[0].location[0]} col-${piecesState[0].location[1]}`}
           onClick={() => setSelected(0)}
      >
        <img src={logo} className="board-piece" alt="logo" /> 0
      </div>
      <div className={`square-member row-${piecesState[1].location[0]} col-${piecesState[1].location[1]}`}
           onClick={() => setSelected(1)}
      >
        <img src={logo} className="board-piece" alt="logo" /> 1
      </div>
      <Piece
        clickHandler={setSelected}
        pieceData={piecesState[2]}
        id={2}
      />
      <h1>{selected?.toString()}</h1>
    </div>
  );
};

export default Board;
