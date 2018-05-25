import {ADD_SCORE} from "../types.js";

function addScore(player) {
  return {
    type: ADD_SCORE,
    player
  };
}

export default addScore;