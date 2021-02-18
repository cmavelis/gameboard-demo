import React, {useReducer, useState} from 'react';
import './Board.scss'
import logo from "./logo.svg";
import {PIECE_ACTIONS, piecesInitialState, piecesReducer} from './reducers/piecesReducer';

const Piece = (props) => {
  const {clickHandler, pieceData, selected} = props;
  return (
    <div className={`
    square-member row-${pieceData.location[0]} col-${pieceData.location[1]}
    ${selected && 'square-member--selected'}
    `}
         onClick={() => clickHandler()}
    >
      <img src={logo} className='board-piece' alt="logo" />
      <span className={`board-piece ${pieceData.player === 2 ? 'player-two': ''}`}>{pieceData.type}</span>
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
      {[0,1,2].map((id)=>
        <Piece
          clickHandler={() => setSelected(id)}
          pieceData={piecesState[id]}
          selected={selected === id}
        />
      )}
    </div>
  );
};

export default Board;
