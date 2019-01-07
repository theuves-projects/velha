import React from 'react'
import styled from 'styled-components'
import Player from './Player.js'

const Container = styled.div`display: inline-block`

const PlayerContainer = styled.div`
  padding: 10px 10px;
  background-color: black;

  // Centralize the player icon
  div {
    margin: 0 auto;
  }
`

const ScoreContainer = styled.div`
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
  <Container>
    <PlayerContainer
      width={width}
    >
      <Player
        playerName={playerName}
        width={width - 20}
        lineWidth={width / 8}
        color='white'
      />
    </PlayerContainer>
    <ScoreContainer
      width={width}
    >
      {score}
    </ScoreContainer>
  </Container>
)

export default Scoreboard