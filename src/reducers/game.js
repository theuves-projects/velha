import { handleActions } from 'redux-actions'
import { finish, play, autoPlay, togglePlayer } from '../actions/game'
import { isFinished, getNextState, whoWon } from 'tttai'

const defaultState = {
  mainPlayer: 'x',
  board:Array(9).fill(null),
  isFinished: false,
  winner: null,
}

export default handleActions(
  new Map([
    [
      finish,
      (state, action) => ({
        ...state,
        board: state.board,
        isFinished: true,
        winner: whoWon(state.board)
      })
    ], [
      play,
      (state, action) => ({
        ...state,
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
        ...state,
        board: getNextState(action.payload.player, state.board),
        isFinished: isFinished(state.board),
        winner: isFinished(state.board)
          ? whoWon(state.board)
          : null
      })
    ], [
      togglePlayer,
      (state, actions) => ({
        ...state,
        mainPlayer: state.mainPlayer === 'x'
          ? 'o'
          : 'x'
      })
    ]
  ]),
  defaultState
)