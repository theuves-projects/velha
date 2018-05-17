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
`;

function This({
  cells,
  onSelectCell,
  borders: border = 3,
  color = "black",
  size = 300
}) {
  size = (size - border * 2) / 3;
  const gap = border + "px";

  return (
    <Table
      gap={gap}
      color={color}
    >
      {cells.map(cell => {
        return (
          <TableCell
            key={cell.i}
            onClick={() => onSelectCell(cell.i)}
            player={cell.name}
            color={color}
            borders={border}
            size={size}
          />
        );
      })}
    </Table>
  );
}

export default This;