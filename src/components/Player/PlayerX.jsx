import React from "react";
import styled from "styled-components";

// components
import Svg from "./Svg.jsx";

const Line = styled.line`
  stroke: var(--color);
  stroke-width: var(--border);
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
      <Line
        x1={border / 2}
        x2={size - border / 2}
        y1={border / 2}
        y2={size - border / 2}
      />

      <Line
        x1={size - border / 2}
        x2={border / 2}
        y1={border / 2}
        y2={size - border / 2}
      />
    </Svg>
  );
}

export default This;