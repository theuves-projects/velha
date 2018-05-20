import React, {Component} from "react";
import styled from "styled-components";

import Button from "./Button.jsx";

const Container = styled.div`
  width: 100%;
  height: ${props => props.open ? "90" : "15"}%;
  background-color: #34495e;
  transition: all .15s ease-out;
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`;

class This extends Component {
  state = {
    open: false
  }
  render() {
    return (
      <Container
        open={this.state.open}
      >
        <Button
          value={this.state.open ? "×" : "↻"}
          onClick={() => this.setState({
            open: !this.state.open
          })}
        />
      </Container>
    );
  }
}


export default This;