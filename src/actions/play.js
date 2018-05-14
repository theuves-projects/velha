import {PLAY} from "../types.js";

function play(player, index) {
  return {
    type: PLAY,
    player,
    index
  }
}

export default play;