import React from "react";
import styled from "styled-components";

// components
import Player from "./Player/index.jsx";

const Container = styled.div`
  position: absolute;
  ${props => props.position}: 0;
  top: ${props => props.top}%;
  transform: translateY(-50%);
  display: inline-flex;
  flex-direction: column;
  text-align: center;
`;

const PlayerContainer = styled.div`
  background-color: #9b59b6;
  padding: 10px;
`;

const Score = styled.div`
  font-size: large;
  padding: 5px 0;
  background-color: #fbc531;
`;

function This({
  player,
  score,
  top = 40,
  position = "left"
}) {
  return (
    <Container
      position={position}
      top={top}
    >
      <PlayerContainer>
        <Player
          name={player}
          color="white"
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
