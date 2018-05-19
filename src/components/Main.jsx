import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import velha from "theuves-velha";

// others
import actions from "../actions.js";

import Table from "./Table/index.jsx";

class Main extends Component {
  selectCell = (index) => {
    const {current} = this.props.state.players;
    const player = this.props.state.players.symbol[current];

    this.props.play(player, index);
    this.props.addCell(index);
  }
  render() {
    return (
      <div>
        <Table
          size={300}
          borders={5}
          color="black"
          cells={this.props.state.cells}
          onSelectCell={this.selectCell}
        />
      </div>
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
  Main
);