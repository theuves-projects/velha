import React from "react";
import styled from "styled-components";

// others
import * as theme from "../theme.js";

// components
import Player from "./Player/index.jsx";

const Container = styled.div`
  position: absolute;
  ${props => props.position}: 0;
  top: ${props => props.top}%;
  cursor: pointer;
  transform: translateY(-50%);
  display: inline-flex;
  flex-direction: column;
  text-align: center;

  &:hover {
    opacity: .95;
  }
  &:active {
    opacity: 1;
  }
`;

const PlayerContainer = styled.div`
  padding: 10px;
  background-color: ${theme.purple};
`;

const Score = styled.div`
  padding: 5px 0;
  font-size: large;
  background-color: ${theme.yellow};
`;

function This({
  main,
  onClick,
  player,
  score,
  top = 0,
  position = "left"
}) {
  return (
    <Container
      onClick={onClick}
      position={position}
      top={top}
    >
      <PlayerContainer>
        <Player
          name={player}
          color={main ? theme.yellow : "white"}
          size={24}
        />
      </PlayerContainer>
      <Score>
        {score}
      </Score>
    </Container>
  );
}

export default This;
