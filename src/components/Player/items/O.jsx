import React from "react";
import styled from "styled-components";

// variables
import {
  BORDER,
  COLOR,
  SIZE
} from "../constants.js";

const Svg = styled.svg`
  --border: ${props => props.border || BORDER}px;
  --color: ${props => props.color || COLOR};
  --size: ${props => props.size || SIZE}px;
  width: calc(var(--size) + var(--border) * 2);
  height: calc(var(--size) + var(--border) * 2);
`;

const Circle = styled.circle`
  --r: calc(var(--size) / 2);
  cx: calc(var(--r) + var(--border));
  cy: calc(var(--r) + var(--border));
  r: var(--r);
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