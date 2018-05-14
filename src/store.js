import {createStore, combineReducers} from "redux";

// reducers
import cells from "./reducers/cells.js";
import players from "./reducers/players.js";

const reducers = combineReducers({
  cells,
  players
});

const store = createStore(reducers);

export default store;