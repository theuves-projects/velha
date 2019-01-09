import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/game'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'
import Scoreboard from '../components/Scoreboard'
import Board from '../components/Board'
import Alert from '../components/Alert'

const StyledScoreboardX = styled.div`
  position: absolute;
  top: 45%;
  left: 0;
  transform: translateY(-50%);

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`

const StyledScoreboardO = styled.div`
  position: absolute;
  top: 45%;
  right: 0;
  transform: translateY(-50%);

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
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

    console.log(this.props.game.players)

    // For the human.
    this.props.actions.play({
      index,
      player: this.props.game.players.human.name
    })

    // For the computer.
    setTimeout(() => {
      this.props.actions.play({
        player: this.props.game.players.human.name === 'x' ? 'o' : 'x'
      })
    }, 250)
  }
  togglePlayer = (name) => {
    if (this.props.game.players.human.name === name) return

    if (!this.props.game.board.every((value) => value === null)) {
      return window.alert('Finish the game before.')
    }

    this.props.actions.togglePlayer()
  }
  start = () => {
    this.props.actions.restart()
  }
  restart = () => {
    if (this.props.game.board.every((value) => value === null)) {
      return
    }

    if (window.confirm('Are you sure?')) {
      this.props.actions.restart()
    }
  }
  render() {
    return (
      <Fragment>
        <StyledScoreboardX onClick={() => this.togglePlayer('x')}>
          <Scoreboard
            width={50}
            playerName='x'
            playerColor={this.props.game.players.human.name === 'x' ? '#8bc34a' : undefined}
            score={this.props.game.players.human.name === 'x'
              ? this.props.game.players.human.victories
              : this.props.game.players.computer.victories
            }
          />
        </StyledScoreboardX>
        <StyledScoreboardO onClick={() => this.togglePlayer('o')}>
          <Scoreboard
            width={50}
            playerName='o'
            playerColor={this.props.game.players.human.name === 'o' ? '#8bc34a' : undefined}
            score={this.props.game.players.human.name === 'o'
              ? this.props.game.players.human.victories
              : this.props.game.players.computer.victories
            }
          />
        </StyledScoreboardO>
        <StyledBoard>
          <Board
            board={this.props.game.board}
            onClick={this.play}
            cellWidth={110}
            cellColor='white'
            borderWidth={8}
            borderColor='#2c3e50'
          />
        </StyledBoard>
        <Alert
          isOpen={this.props.game.isFinished}
          onClickButtonOpened={this.start}
          onClickButtonClosed={this.restart}
          winner={this.props.game.winner}
          containerHeight={10}
          buttonWidth={65}
          buttonIconOpened='play_arrow'
          buttonIconClosed='refresh'
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