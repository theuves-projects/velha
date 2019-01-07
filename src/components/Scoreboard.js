import React from 'react'
import styled from 'styled-components'
import Player from './Player.js'

const StyledContainer = styled.div`display: inline-block`

const StyledPlayerContainer = styled.div`
  padding: 10px 10px;
  background-color: black;

  // Centralize the player icon
  div {
    margin: 0 auto;
  }
`

const StyledScoreContainer = styled.div`
  padding: 10px 10px;
  font-size: ${props => props.width / 2}px
  font-weight: bold;
  text-align: center;
  color: black;
  background-color: #ccc;
`

const Scoreboard = ({
  width,
  playerName,
  score = 0
}) => (
  <StyledContainer>
    <StyledPlayerContainer
      width={width}
    >
      <Player
        playerName={playerName}
        width={width - 20}
        lineWidth={width / 8}
        color='white'
      />
    </StyledPlayerContainer>
    <StyledScoreContainer
      width={width}
    >
      {score}
    </StyledScoreContainer>
  </StyledContainer>
)

export default Scoreboard