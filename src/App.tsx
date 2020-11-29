import React from "react";
import "./styles/global.css";
import AppBar from "./components/AppBar";
import Button from "./components/Button";
import Main from "./components/Main";

function App() {
  return (
    <div className="container">
      <AppBar>Guilherme's Challenge</AppBar>
      <Main/>
      <AppBar>
        <Button />
      </AppBar>
    </div>
  );
}

export default App;
