import {
  PLAY,
  RESET
} from "../types.js";

const initialState = Array.from(Array(9)).map(function (val, i) {
  return {
    i: i + 1
  };
});

function cellsReducer(state = initialState, action) {
  switch (action.type) {
    case PLAY:
      return state.map(function (cell) {
        if (cell.i === action.index && !cell.name && /^(x|o)$/.test(action.player)) {
          return Object.assign({}, cell, {
            name: action.player
          });
        }
        return cell;
      });
      break;
    case RESET:
      return initialState;
      break;
    default:
      return state;
  }
}

export default cellsReducer;