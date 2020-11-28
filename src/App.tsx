import React from "react";
import "./styles/global.css";
import AppBar from "./components/AppBar";
import Button from "./components/Button"
import Main from "./components/Main"

function App() {
  return (
    <div>
      <AppBar variant="top">Guilherme's Challenge</AppBar>
      <Main color='20rem'/>
      <AppBar variant="bottom"><Button/></AppBar>
    </div>
  );
}

export default App;
