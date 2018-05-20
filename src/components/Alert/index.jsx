import React from "react";
import styled from "styled-components";

import Button from "./Button.jsx";

const Container = styled.div`
  width: 100%;
  height: 15%;
  background-color: #34495e;
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`;

function Alert() {
  return (
    <Container>
      <Button />
    </Container>
  );
}

export default Alert;