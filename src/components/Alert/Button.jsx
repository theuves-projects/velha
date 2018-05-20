import React from "react";
import styled from "styled-components";

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

  &:hover {
    transform: translateY(-50%) scale(1.15);
    filter: contrast(1.05);
  }
  &:active {
    transform: translateY(-50%) scale(1.1);
    filter: contrast(.95);
  }
`;

function This({
  onClick,
  value
}) {
  return (
    <Button
      onClick={onClick}
    >
      {value}
    </Button>
  );
}

export default This;