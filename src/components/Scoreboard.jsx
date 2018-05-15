import React from "react";
import styled from "styled-components";

// components
import Player from "./Player/index.jsx";

const Container = styled.div`
  position: fixed;
  ${props => props.position}: 0;
  top: 35%;
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
  position
}) {
  return (
    <Container
      position={position}
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
