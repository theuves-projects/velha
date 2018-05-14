import {ADD_CELL} from "../types.js";

function addCell(index) {
  return {
    type: ADD_CELL,
    index
  };
}

export default addCell;