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
  cursor: pointer;
  background-color: ${props => props.color};

  > div {
    position: absolute;
    animation: show-player .15s;
    z-index: 9;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @keyframes show-player {
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
  borderColor,
  colorPlayerX,
  colorPlayerO
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
            colorPlayerX={colorPlayerX}
            colorPlayerO={colorPlayerO}
          />
        ) : (
          null
        )}
      </StyledGridItem>
    ))}
  </StyledGrid>
)

export default Board