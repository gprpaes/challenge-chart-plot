import React from "react";
import "./styles/global.css";
import AppBar from "./components/AppBar";
import Button from "./components/Button";
import Main from "./components/Main";
import CodeEditor from "./components/CodeEditor"

function App() {
  return (
    <div className="container">
      <AppBar>Guilherme's Challenge</AppBar>
      <CodeEditor/>
      <Main/>
      <AppBar>
        <Button />
      </AppBar>
    </div>
  );
}

export default App;
