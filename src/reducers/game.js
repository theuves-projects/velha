import { handleActions } from 'redux-actions'
import assignDeep from 'assign-deep'
import * as actions from '../actions/game'
import { isFinished, getNextState, whoWon } from 'tttai'

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
      (state, action) => assignDeep({}, state, {
        board: Array(9).fill(null),
        isFinished: false,
        winner: null
      })
    ], [
      actions.play,
      (state, action) => assignDeep({}, state, {
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
      (state, action) => assignDeep({}, state, {
        ...state,
        players: {
          human: {
            name: state.players.computer.name
          },
          computer: {
            name: state.players.human.name
          }
        }
      })
    ]
  ]),
  defaultState
)