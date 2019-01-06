import React from 'react'
import styled from 'styled-components'

const Grid = styled.div`
  display: inline-grid;
  grid-template-columns: auto auto auto;
  grid-gap: ${props => props.width}px;
  background-color: ${props => props.color};
`

const GridItem = styled.div`
  width: ${props => props.width}px;
  height: ${props => props.width}px;
  background-color: ${props => props.color};
`

const Table = ({
  cellWidth = 1,
  cellColor = 'white',
  borderWidth = 1,
  borderColor = 'black'
}) => (
  <Grid
    width={borderWidth}
    color={borderColor}
  >
    {Array.from(Array(9)).map((_, index) => (
      <GridItem
        key={index}
        width={cellWidth}
        color={cellColor}
      />
    ))}
  </Grid>
)

export default Table