import { handleActions } from 'redux-actions'
import { finish, play, autoPlay } from '../actions/game.js'

const defaultState = {
  board:Array(9).fill(null),
  isFinished: false,
  winner: null
}

export default handleActions(
  new Map([
    [
      finish,
      (state, action) => ({
        board: state.board,
        isFinished: true,
        winner: whoWon(state.board)
      })
    ], [
      play,
      (state, action) => ({
        board: state.board.map(function (value, index) {
          return index === action.payload.index
            ? action.payload.player
            : value
        }),
        isFinished: isFinished(state.board),
        winner: isFinished(state.board)
          ? whoWon(state.board)
          : null
      })
    ], [
      autoPlay,
      (state, action) => ({
        board: getNextState(action.payload.player, state.board),
        isFinished: isFinished(state.board),
        winner: isFinished(state.board)
          ? whoWon(state.board)
          : null
      })
    ]
  ]),
  defaultState
)