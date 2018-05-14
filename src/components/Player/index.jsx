import React from "react";
import styled from "styled-components";

// components
import PlayerO from "./PlayerO.jsx";
import PlayerX from "./PlayerX.jsx";

// constants
const BORDER = 3;
const COLOR = "black";
const SIZE = 32;

function This({
  name,
  border = BORDER,
  color = COLOR,
  size = SIZE
}) {
  switch (name) {
    case "o":
      return (
        <PlayerO
          border={border}
          color={color}
          size={size}
        />
      );
      break;
    case "x":
      return (
        <PlayerX
          border={border}
          color={color}
          size={size}
        />
      )
      break;
  }
}

export default This;