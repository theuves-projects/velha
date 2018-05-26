import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import velha from "theuves-velha";
import styled from "styled-components";
import randomInt from "random-int";

// others
import actions from "../actions.js";
import * as theme from "../theme.js"

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
  overflow: hidden;
  background-color: white;

  animation: show-main .15s;

  @keyframes show-main {
    from {
      transform: scale(1.05);
      opacity: .5;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
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
        this.setState({
          showAlert: true,
          winner: this.winner().who
        });

        const isUser = this.props.state.players.symbol.user === this.winner().who;
        const player = isUser ? "user" : "computer";

        this.props.addScore(player);
      }
      if (this.noWinner()) {
        this.setState({
          showAlert: true,
          winner: "xo"
        });
      }
    }, 150);
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
  changeSymbol = player => {
    return () => {
      if (this.props.state.players.symbol.user !== player) {
        if (this.props.state.cells.every(cell => !cell.name)) {
          this.props.changeSymbol();
        } else {
          window.alert("Termine o jogo, antes disso.");
        }
      }
    };
  }
  render() {
    var ALERT_HEIGHT = 18;
    var ITEMS_TOP = (100 - ALERT_HEIGHT) / 2;

    return (
      <Main>
        <Scoreboard
          main={this.props.state.players.symbol.user === "x"}
          onClick={this.changeSymbol("x")}
          top={ITEMS_TOP}
          player="x"
          score={this.props.state.players.scores.user}
          position="left"
        />
        <Scoreboard
          main={this.props.state.players.symbol.user === "o"}
          onClick={this.changeSymbol("o")}
          top={ITEMS_TOP}
          player="o"
          score={this.props.state.players.scores.computer}
          position="right"
        />
        <Table
          top={ITEMS_TOP}
          size={330}
          borders={6}
          cells={this.props.state.cells}
          colors={{border: theme.blue, x: theme.purple, o: theme.green}}
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