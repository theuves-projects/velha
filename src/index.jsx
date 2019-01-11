import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import styled, { createGlobalStyle } from 'styled-components'
import importGoogleFonts from 'import-google-fonts'
import { Provider } from 'react-redux'
import store from './store'
import App from './containers/App.jsx'

const StyledGlobal = createGlobalStyle`
  html,
  body,
  #root {
    height: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: Roboto, Arial, Helvetica, sans-serif;
    background-color: #eee;
  }
`

const StyledGoogleFonts = importGoogleFonts(createGlobalStyle, null, [
  'Roboto',
  'Pacifico',
  'Material Icons'
])

const StyledPage = styled.div`
  position: relative;
  margin: 0 auto;
  width: 700px;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 0 30px 0 #ddd;
  background-color: white;
`

ReactDOM.render(
  <Fragment>
    <StyledGlobal />
    <StyledGoogleFonts />
    <StyledPage>
      <Provider store={store}>
        <App />
      </Provider>
    </StyledPage>
  </Fragment>,
  document.getElementById('root')
)