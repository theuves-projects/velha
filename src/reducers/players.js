import {
  ADD_CELL,
  ADD_SCORE,
  CHANGE_SYMBOL,
  RESET,
} from "../types.js";

const initialState = {
  current: "user",
  user: [],
  computer: [],
  symbol: {
    user: "x",
    computer: "o"
  },
  scores: {
    user: 0,
    computer: 0
  }
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
    case ADD_SCORE:
      switch (action.player) {
        case "user":
          return Object.assign({}, state, {
            scores: {
              user: state.scores.user + 1,
              computer: state.scores.computer
            }
          });
          break;
        case "computer":
          return Object.assign({}, state, {
            scores: {
              user: state.scores.user,
              computer: state.scores.computer + 1
            }
          });
          break;
      }
      break
    case CHANGE_SYMBOL:
      return Object.assign({}, state, {
        scores: {
          user: state.scores.computer,
          computer: state.scores.user
        },
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
        scores: state.scores,
        symbol: state.symbol
      });
      break;
    default:
      return state;
  }
}

export default playersReducer;