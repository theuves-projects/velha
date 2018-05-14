import React from "react";
import styled from "styled-components";

// components
import Svg from "./Svg.jsx";

const Circle = styled.circle`
  --r: calc(var(--size) / 2);
  cx: var(--r);
  cy: var(--r);
  r: calc(var(--r) - var(--border) / 2);
  fill: transparent;
  stroke-width: var(--border);
  stroke: var(--color);
`;

function This({
  border,
  color,
  size
}) {
  return (
    <Svg
      border={border}
      color={color}
      size={size}
    >
      <Circle />
    </Svg>
  );
}

export default This;