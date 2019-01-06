import React from 'react'
import styled from 'styled-components'

const Grid = styled.div`
  display: inline-grid;
  grid-template-columns: auto auto auto;
  grid-gap: ${props => props.width};
  background-color: ${props => props.color};
`

const GridItem = styled.div`
  width: ${props => props.width};
  height: ${props => props.width};
  background-color: ${props => props.color};
`

const Table = ({
  cellWidth = '1px',
  cellColor = 'white',
  borderWidth = '1px',
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