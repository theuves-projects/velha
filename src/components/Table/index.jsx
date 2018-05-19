import React from "react";
import styled from "styled-components";

// components
import TableCell from "./TableCell.jsx"

const Table = styled.div`
  display: inline-grid;
  grid-gap: ${props => props.gap};
  grid-template-columns: repeat(3, auto);
  grid-auto-rows: auto;
  background-color: ${props => props.color};
  position: fixed;
  top: ${props => props.top}%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function This({
  cells,
  onSelectCell,
  top = 40,
  borders: border = 3,
  colors = {},
  size = 300
}) {
  size = (size - border * 2) / 3;
  colors = Object.assign({border: "gray", x: "black", o: "black"}, colors);

  const gap = border + "px";

  return (
    <Table
      top={top}
      gap={gap}
      color={colors.border}
    >
      {cells.map(cell => {
        return (
          <TableCell
            key={cell.i}
            onClick={() => onSelectCell(cell.i)}
            player={cell.name}
            colors={colors}
            borders={border}
            size={size}
          />
        );
      })}
    </Table>
  );
}

export default This;