import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import velha from "theuves-velha";
import styled from "styled-components";

// others
import actions from "../actions.js";

// components
import Table from "./Table/index.jsx";
import Alert from "./Alert/index.jsx";
import Scoreboard from "./Scoreboard.jsx";

const Main = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 750px;
  min-width: 500px;
  height: 100%;
  background-color: white;
  overflow: hidden;
`;

class This extends Component {
  state = {
    showAlert: true,
    winner: "x"
  }
  selectCell = index => {
    const {current} = this.props.state.players;
    const player = this.props.state.players.symbol[current];

    this.props.play(player, index);
    this.props.addCell(index);
  }
  closeAlert = () => {
    // close the alert
  }
  reloadGame = () => {
    // reload the game
  }
  endGame = winner => {
    this.setState({
      showAlert: !this.state.showAlert,
      winner
    });
  }
  render() {
    return (
      <Main>
        <Scoreboard
          player="x"
          score={0}
          position="left"
        />
        <Scoreboard
          player="o"
          score={0}
          position="right"
        />
        <Table
          size={330}
          borders={6}
          cells={this.props.state.cells}
          colors={{border: "#34495e", x: "#8e44ad", o: "#27ae60"}}
          onSelectCell={this.selectCell}
        />
        <Alert
          player={this.state.winner}
          isOpen={this.state.showAlert}
          onReload={this.reloadGame}
          onClose={this.closeAlert}
        />
      </Main>
    );
  }
}

function mapStateToProps(state) {
  return {
    state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  This
);