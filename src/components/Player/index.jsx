import React from "react";
import styled from "styled-components";

// components
import PlayerO from "./PlayerO.jsx";
import PlayerX from "./PlayerX.jsx";

const Animation = styled.div`
  ${props => props.animate && "animation: show .15s;"}

  @keyframes show {
    from {
      transform: scale(6);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

function This({
  name,
  animate = false,
  border = 3,
  color = "black",
  size = 32
}) {
  switch (name) {
    case "o":
      return (
        <Animation
          animate={animate}
        >
          <PlayerO
            border={border}
            color={color}
            size={size}
          />
        </Animation>
      );
      break;
    case "x":
      return (
        <Animation
          animate={animate}
        >
          <PlayerX
            border={border}
            color={color}
            size={size}
          />
        </Animation>
      )
      break;
  }

  return (
    <div />
  );
}

export default This;