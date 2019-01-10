import React, { Fragment } from 'react'
import styled from 'styled-components'
import lightness from 'lightness'
import Player from './Player'

const StyledContainer = styled.div`
  position: absolute;
  width: 100%;
  transition: .25s linear;
  height: ${props => props.isOpen ? 100 - props.height : props.height}%;
  bottom: 0;
  background-color: ${props => props.color};
`

const StyledButton = styled.button`
  position: absolute;
  width: ${props => props.width}px;
  height: ${props => props.width}px;
  border: none;
  border-radius: 50%;
  outline: none;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: .15s linear;
  color: white;
  background-color: ${props => props.color};

  &:hover {
    transform: translate(-50%, -50%) scale(1.15);
    background-color: ${props => lightness(props.color, -5)};
  }
  &:active {
    transform: translate(-50%, -50%) scale(1.1);
    background-color: ${props => props.color}
  }
  .material-icons {
    font-size: ${props => props.width / 2}px;
  }
`

const StyledMessage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: ${props => props.isOpen ? 'block' : 'none'};
  animation: show-message .5s forwards;

  @keyframes show-message {
    from {
      transform: translate(-50%, 100%);
    }
    to {
      transform: translate(-50%, -50%);
    }
  }
`

const StyledMessageText = styled.div`
  margin-top: 20px;
  text-align: center;
  font-family: Pacifico, 'Comic Sans MS', cursive;
  font-size: 30px;
  color: white;
`

const Winner = ({ name }) => (
  <Player
    playerName={name}
    width={150}
    lineWidth={25}
    color='white'
  />
)

const Alert = ({
  isOpen,
  onClickButtonOpened,
  onClickButtonClosed,
  containerHeight,
  containerColor,
  buttonIconOpened,
  buttonIconClosed,
  buttonWidth,
  buttonColor,
  winner
}) => (
  <StyledContainer
    isOpen={isOpen}
    height={containerHeight}
    color={containerColor}
  >
    <StyledButton
      onClick={isOpen ? onClickButtonOpened : onClickButtonClosed}
      width={buttonWidth}
      color={buttonColor}
    >
      <i className="material-icons">
        {isOpen ? buttonIconOpened : buttonIconClosed}
      </i>
    </StyledButton>
    <StyledMessage isOpen={isOpen}>
      {winner ? (
        <Winner name={winner} />
      ) : (
        <Fragment>
          <Winner name='x' />
          <Winner name='o' />
        </Fragment>
      )}
      <StyledMessageText>WIN!</StyledMessageText>
    </StyledMessage>
  </StyledContainer>
)

export default Alert