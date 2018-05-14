import {
  UPDATE_PLAYER,
  ADD_CELL,
  RESET
} from "../types.js";

const initialState = {
  current: "user",
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
    case RESET:
      return initialState;
      break;
    default:
      return state;
  }
}

export default playersReducer;