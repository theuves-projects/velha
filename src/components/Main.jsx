import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import velha from "theuves-velha";
import styled from "styled-components";
import randomInt from "random-int";

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
    showAlert: false,
    winner: null
  }
  rest = cells => {
    const list = [
      1, 2, 3,
      4, 5, 6,
      7, 8, 9
    ];

    return list.filter(item => {
      return !cells.includes(item);
    });
  }
  findEmpty = (cells, frees) => {
    if (!cells) {
      return false;
    }

    return cells.find(cell => {
      return frees.includes(cell);
    });
  }
  noWinner = () => {
    const {computer, user} = this.props.state.players;

    return computer.length + user.length >= 9;
  }
  winner = () => {
    const {computer, user} = this.props.state.players;
    const userSymbol = this.props.state.players.symbol.user;
    const computerSymbol = this.props.state.players.symbol.computer;
    const computerIsWinner = velha(computer).fim;
    const userIsWinner = velha(user).fim;
    
    return {
      has: userIsWinner || computerIsWinner,
      who: userIsWinner ? userSymbol : computerSymbol
    };
  }
  selectCell = index => {
    const {current} = this.props.state.players;
    const player = this.props.state.players.symbol[current];
    const computerSymbol = this.props.state.players.symbol.computer;

    // Verifica se a casa já foi selecionada.
    if (this.props.state.cells.some(cell => cell.i === index && cell.name)) {
      return;
    }

    this.props.play(player, index);
    this.props.addCell(index);

    setTimeout(() => {
      const {computer, user} = this.props.state.players;
      const cells = [].concat(computer, user);
      const free = this.rest(cells);

      const forUser = !!velha(user).proximas.length;
      const forComputer = !!velha(computer).proximas.length;

      const cellUser = this.findEmpty(velha(user).proximas, free);
      const cellComputer = this.findEmpty(velha(computer).proximas, free);

      const randomNext = free[randomInt(free.length - 1)];
      const logicNext = cellComputer || cellUser;

      const next = !forUser && !forComputer
        ? randomNext
        : logicNext
            ? logicNext
            : randomNext;

      this.props.play(computerSymbol, next);
      this.props.addCell(next);

      if (this.winner().has) {
        return this.setState({
          showAlert: true,
          winner: this.winner().who
        });
      }
      if (this.noWinner()) {
        return this.setState({
          showAlert: true,
          winner: "xo"
        });
      }
    }, 200);
  }
  closeAlert = () => {
    this.props.reset();

    this.setState({
      showAlert: false,
      winner: null
    });
  }
  reloadGame = () => {
    if (!this.props.state.cells.every(cell => !cell.name)) {
      if (window.confirm("Tem certeza?")) {
        this.props.reset();
      }
    }
  }
  render() {
    var ALERT_HEIGHT = 18;
    var ITEMS_TOP = (100 - ALERT_HEIGHT) / 2;

    return (
      <Main>
        <Scoreboard
          top={ITEMS_TOP}
          player="x"
          score={0}
          position="left"
        />
        <Scoreboard
          top={ITEMS_TOP}
          player="o"
          score={0}
          position="right"
        />
        <Table
          top={ITEMS_TOP}
          size={330}
          borders={6}
          cells={this.props.state.cells}
          colors={{border: "#34495e", x: "#8e44ad", o: "#27ae60"}}
          onSelectCell={this.selectCell}
        />
        <Alert
          height={ALERT_HEIGHT}
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