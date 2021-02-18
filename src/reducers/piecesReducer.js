export const SAMPLE_PIECES = {
  0: {
    type: 'pawn',
    player: 1,
    location: [1,1]
  },
  1: {
    type: 'knight',
    player: 2,
    location: [2, 3]
  },
  2: {
    type: 'king',
    player: 1,
    location: [1,4]
  },
}

// const emptyBoard = (row, col) => {
//   const newObject = {};
//   for (let i = 0; i <= (row*col); i++) {
//     // make all spaces null
//     newObject[i] = null;
//   }
//   return newObject;
// }

export const piecesInitialState = () => {
  return Object.assign({}, SAMPLE_PIECES)
};

export const PIECE_ACTIONS = {
  MOVE: 'move',
  DISCARD: 'discard',
  RESET: 'reset'
};

export const piecesReducer = (state, action) => {
  // console.log(state, action);
  // EDIT example action:
  // {type: 'move', id: 1, location: 4 }
  switch (action.type) {
    case PIECE_ACTIONS.MOVE:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          location: action.location
        }
      }
    default:
      throw new Error();
  }
};
