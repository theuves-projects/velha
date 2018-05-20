import React, {Component} from "react";
import styled from "styled-components";

// components
import Button from "./Button.jsx";
import Player from "../Player/index.jsx";

const Container = styled.div`
  width: 100%;
  height: ${props => props.open ? "90" : "15"}%;
  background-color: #34495e;
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
  font-size: 3em;
  color: white;
`;

function This({
  isOpen = false,
  onReload,
  onClose,
  player
}) {
  return (
    <Container
      open={isOpen}
    >
      <Button
        value={isOpen ? "►" : "↻"}
        onClick={() => isOpen ? onClose() : onReload()}
      />

      <Message
        show={isOpen}
      >
        <Player
          name={player}
          color="white"
          border={8}
          size={120}
        />

        <Text>VENCEU!</Text>
      </Message>
    </Container>
  );
}

export default This;