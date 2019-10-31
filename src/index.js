import React from "react";
import ReactDOM from "react-dom";
import { User } from "./component/user";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <User />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
