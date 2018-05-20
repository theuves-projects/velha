import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: inline-block;
  position: relative;
`;

const Button = styled.button`
  --size: 2em;
  font-size: var(--size);
  width: var(--size);
  height: var(--size);
  border-radius: 100px;
  border: none;
  outline: none;
  background-color: #e67e22;
  color: white;
  transform: translateY(-50%);
  filter: contrast(1);
  transition: all .15s;
  z-index: 1;
  display: block;

  &:hover ~ p {
    display: block;
  }
  &:hover {
    transform: translateY(-50%) scale(1.15);
    filter: contrast(1.05);
  }
  &:active {
    transform: translateY(-50%) scale(1.1);
    filter: contrast(.95);
  }
`;

const Tooltip = styled.p`
  display: none;
  padding: 5px 10px;
  border-radius: 3px;
  background-color: white;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  animation: show-tooltip .075s forwards;

  @keyframes show-tooltip {
    from {
      opacity: 0;
      transform: translate(-50%, -120%);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -90%);
    }
  }

  &::before {
    content: "";
    width: 0;
    height: 0;
    top: 0;
    left: 50%;
    position: absolute;
    border: solid 10px white;
    border-left-color: transparent;
    border-right-color: transparent;
    border-top-color: transparent;
    transform: translate(-50%, -95%);
  }
`;

function This({
  onClick,
  tooltip,
  value
}) {
  return (
    <Container>
      <Button
        onClick={onClick}
      >
        {value}
      </Button>
      <Tooltip>
        {tooltip}
      </Tooltip>
    </Container>
  );
}

export default This;