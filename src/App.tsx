import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AnimatedSearch from "./animations/AnimatedSearch";

function App() {
  return (
    <div className="App">
      <AnimatedSearch
        placeholder="hello"
        style={{ marginTop: "20px" }}
        width={"500px"}
      />
    </div>
  );
}

export default App;
