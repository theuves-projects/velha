import React from "react";
import styled from "styled-components";

const Button = styled.button`
  --size: 2em;
  font-size: var(--size);
  width: var(--size);
  height: var(--size);
  transform: translateY(-50%);
  border-radius: 100px;
  border: none;
  outline: none;
  background-color: #e67e22;
  color: white;
`;

function This() {
  return (
    <Button>
      ↻
    </Button>
  );
}

export default This;