import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";

// components
import Main from "./components/Main.jsx";
import "./globalStyles.js";

// others
import store from "./store.js";

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);