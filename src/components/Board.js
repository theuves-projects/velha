import React from 'react'
import styled from 'styled-components'
import Player from './Player'

const StyledGrid = styled.div`
  display: inline-grid;
  grid-template-columns: auto auto auto;
  grid-gap: ${props => props.width}px;
  background-color: ${props => props.color};
`

const StyledGridItem = styled.div`
  position: relative;
  width: ${props => props.width}px;
  height: ${props => props.width}px;
  background-color: ${props => props.color};

  > div {
    position: absolute;
    animation: show .15s;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @keyframes show {
      from {
        transform: translate(-50%, -50%) scale(2);
      }
      to {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
`

const Board = ({
  board,
  onClick,
  cellWidth,
  cellColor,
  borderWidth,
  borderColor
}) => (
  <StyledGrid
    width={borderWidth}
    color={borderColor}
  >
    {board.map((playerName, index) => (
      <StyledGridItem
        key={index}
        width={cellWidth}
        color={cellColor}
        onClick={() => onClick(index)}
      >
        {playerName ? (
          <Player
            playerName={playerName}
            lineWidth={borderWidth}
            width={cellWidth - 20}
            color='red'
          />
        ) : (
          null
        )}
      </StyledGridItem>
    ))}
  </StyledGrid>
)

export default Board