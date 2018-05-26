import React, {Component} from "react";
import styled from "styled-components";

// others
import * as theme from "../../theme.js";

// components
import Button from "./Button.jsx";
import Player from "../Player/index.jsx";

const Container = styled.div`
  width: 100%;
  height: ${props => props.open ? 100 - props.height / 2 : props.height}%;
  background-color: ${theme.blue};
  transition: all .15s ease-out;
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Message = styled.div`
  display: ${props => props.show ? "block" : "none"};
  position: absolute;
  left: 50%;
  top: 55%;
  transform: translate(-50%, -50%);
  letter-spacing: 5px;
  animation: show-alert .25s forwards;

  @keyframes show-alert {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Text = styled.p`
  padding: 0;
  margin-top: 20px;
  white-space: nowrap;
  font-size: 3em;
  color: white;
`;

const Inline = styled.div`
  display: inline-flex;
`;

function This({
  height = 0,
  isOpen = false,
  onReload,
  onClose,
  player
}) {
  return (
    <Container
      open={isOpen}
      height={height}
    >
      <Button
        value={isOpen ? "►" : "↻"}
        tooltip={isOpen ? "FECHAR" : "REINICIAR"}
        onClick={() => isOpen ? onClose() : onReload()}
      />

      <Message
        show={isOpen}
      >
        {player === "xo" ? (
          <Inline>
            <Player
              name="x"
              color="white"
              border={8}
              size={90}
            />
            <Player
              name="o"
              color="white"
              border={8}
              size={90}
            />
          </Inline>
        ) : (
          <Player
            name={player}
            color="white"
            border={8}
            size={120}
          />
        )}

        <Text>{player === "xo" ? "DEU VELHA" : "VENCEU"}!</Text>
      </Message>
    </Container>
  );
}

export default This;