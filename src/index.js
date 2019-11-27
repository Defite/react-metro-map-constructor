import React from "react";
import ReactDOM from "react-dom";

import MetroMap from "./components/MetroMap";
import ScrollFrame from "./components/ScrollFrame";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <ScrollFrame>
        <MetroMap />
      </ScrollFrame>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
