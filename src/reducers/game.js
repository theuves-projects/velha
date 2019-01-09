import { handleActions } from 'redux-actions'
import * as actions from '../actions/game'
import { isFinished, getNextState, whoWon } from 'tttai'

function countVictories(isWinner,) {

}

const defaultState = {
  board: Array(9).fill(null),
  isFinished: false,
  winner: null,
  players: {
    human: {
      name: 'x',
      victories: 0
    },
    computer: {
      name: 'o',
      victories: 0
    }
  }
}

export default handleActions(
  new Map([
    [
      actions.restart,
      (state, action) => ({
        ...state,
        board: Array(9).fill(null),
        isFinished: false,
        winner: null
      })
    ], [
      actions.play,
      (state, action) => ({
          ...state,
          board: (() => {
            if (action.payload.index === undefined) {
              return getNextState(action.payload.player, state.board)
            }

            return state.board.map(function (value, index) {
              return index === action.payload.index
                ? action.payload.player
                : value
            })
          })(),
          isFinished: isFinished(state.board),
          winner: isFinished(state.board) ? whoWon(state.board) : null,
          players: {
            human: {
              ...state.players.human,
              victories: state.players.human.victories + (whoWon(state.board) === state.players.human.name)
            },
            computer: {
              ...state.players.computer,
              victories: state.players.computer.victories + (whoWon(state.board) === state.players.computer.name)
            }
          }
      })
    ], [
      actions.togglePlayer,
      (state, action) => ({
        ...state,
        players: {
          human: state.players.computer,
          computer: state.players.human
        }
      })
    ]
  ]),
  defaultState
)