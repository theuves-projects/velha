import {
  ADD_CELL,
  CHANGE_SYMBOL,
  RESET,
} from "../types.js";

const initialState = {
  current: "user",
  symbol: {
    user: "x",
    computer: "o"
  },
  user: [],
  computer: []
};

function playersReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CELL:
      if (
           state.user.includes(action.index)
        || state.computer.includes(action.index)
        || action.index < 1
        || action.index > 9
       ) {
        return state;
      }
      switch (state.current) {
        case "user":
          return Object.assign({}, state, {
            current: "computer",
            user: state.user.concat(action.index).sort()
          });
          break;
        case "computer":
          return Object.assign({}, state, {
            current: "user",
            computer: state.computer.concat(action.index).sort()
          });
          break;
      }
      break;
    case CHANGE_SYMBOL:
      return Object.assign({}, state, {
        symbol: {
          user: state.symbol.user === "x"
            ? "o"
            : "x",
          computer: state.symbol.computer === "x"
            ? "o"
            : "x"
        }
      });
    case RESET:
      return Object.assign({}, initialState, {
        symbol: {
          user: state.symbol.user,
          computer: state.symbol.computer
        }
      });
      break;
    default:
      return state;
  }
}

export default playersReducer;