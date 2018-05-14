import React from "react";
import styled from "styled-components";

const This = styled.svg`
  --border: ${props => props.border}px;
  --color: ${props => props.color};
  --size: ${props => props.size}px;
  width: var(--size);
  height: var(--size);
`;

export default This;