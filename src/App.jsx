import React, { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from './components/Log'
function App() {

  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare() {
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
  }

  return (
    <main>
      <div id="game-container">
        <ol id='players' className="highlight-player">
          <Player initialName="Mostafa" symbol="X" isActive={activePlayer === 'X'}></Player>
          <Player initialName="Yehia" symbol="O" isActive={activePlayer === 'O'}></Player>
        </ol>

        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}></GameBoard>

      </div>

      <Log></Log>
    </main>
  );
}

export default App;