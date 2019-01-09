import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/game'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'
import Scoreboard from '../components/Scoreboard'
import Board from '../components/Board'
import Alert from '../components/Alert'

const StyledScoreboardLeft = styled.div`
  position: absolute;
  top: 45%;
  left: 0;
  transform: translateY(-50%);
`

const StyledScoreboardRight = styled.div`
  position: absolute;
  top: 45%;
  right: 0;
  transform: translateY(-50%);
`

const StyledBoard = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
`

class App extends Component {
  play = (index) => {
    if (this.props.game.isFinished) return
    if (this.props.game.board[index]) return window.alert('Invalid!')

    this.props.actions.play({
      index,
      player: this.props.game.mainPlayer
    })

    setTimeout(() => {
      this.props.actions.autoPlay({
        player: this.props.game.mainPlayer === 'x'
          ? 'o'
          : 'x'
      })
    }, 250)
  }
  render() {
    const { board, isFinished, winner } = this.props.game

    return (
      <Fragment>
        <StyledScoreboardRight>
          <Scoreboard
            width={50}
            playerName='x'
          />
        </StyledScoreboardRight>
        <StyledScoreboardLeft>
          <Scoreboard
            width={50}
            playerName='o'
          />
        </StyledScoreboardLeft>
        <StyledBoard>
          <Board
            board={board}
            onClick={this.play}
            cellWidth={110}
            cellColor='white'
            borderWidth={8}
            borderColor='#2c3e50'
          />
        </StyledBoard>
        <Alert
          isOpen={isFinished}
          winner={winner}
          containerHeight={10}
          buttonWidth={65}
          buttonIcon='refresh'
        />
      </Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    game: state.game
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)