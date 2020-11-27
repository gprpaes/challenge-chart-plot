import React from 'react';
import './styles/global.css'
import AppBar from "./components/AppBar"


function App() {
  return (
    <div>
    <AppBar variant="top"  content ="Guilherme's Challenge"/>
    <AppBar variant="bottom"/>
    </div>
  );
}

export default App;
