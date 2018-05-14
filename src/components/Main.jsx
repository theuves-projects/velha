import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import velha from "theuves-velha";

// others
import actions from "../actions.js";

class Main extends Component {
  render() {

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