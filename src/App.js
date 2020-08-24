import React from 'react';
import logo from './logo.svg';
import './App.scss';

import Board from './Board.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main className="App-main">
        <Board/>
      </main>
    </div>
  );
}

export default App;
