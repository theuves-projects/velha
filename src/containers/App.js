import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/game'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'
import Alert from '../components/Alert'
import Player from '../components/Player'
import Scoreboard from '../components/Scoreboard'
import Table from '../components/Table'

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Fragment>
        
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