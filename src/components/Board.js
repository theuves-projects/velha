import React from 'react'
import styled from 'styled-components'

const StyledGrid = styled.div`
  display: inline-grid;
  grid-template-columns: auto auto auto;
  grid-gap: ${props => props.width}px;
  background-color: ${props => props.color};
`

const StyledGridItem = styled.div`
  width: ${props => props.width}px;
  height: ${props => props.width}px;
  background-color: ${props => props.color};
`

const Board = ({
  cellWidth = 1,
  cellColor = 'white',
  borderWidth = 1,
  borderColor = 'black'
}) => (
  <StyledGrid
    width={borderWidth}
    color={borderColor}
  >
    {Array.from(Array(9)).map((_, index) => (
      <StyledGridItem
        key={index}
        width={cellWidth}
        color={cellColor}
      />
    ))}
  </StyledGrid>
)

export default Board