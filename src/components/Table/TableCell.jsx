import React from "react";
import styled from "styled-components";

// components
import Player from "../Player/index.jsx";

const TableCell = styled.div`
  width: ${props => props.size};
  height: ${props => props.size};
  position: relative;
  background-color: white;
  z-index: -1;
`;

const Center = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
`;

function This({
  colors,
  player,
  size,
  onClick,
  borders: border,
}) {
  const PERCENTAGE = 75;
  const playerSize = PERCENTAGE * size / 100;
  size += "px";

  return (
    <TableCell
      size={size}
      onClick={onClick}
    >
      <Center>
        <Player
          animate={true}
          border={border}
          color={colors[player]}
          name={player}
          size={playerSize}
        />
      </Center>
    </TableCell>
  );
}

export default This;