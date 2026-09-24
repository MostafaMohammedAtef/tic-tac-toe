import Player from "./components/Player"
import GameBoard from "./GameBoard"
function App() {
  

  return (
    <main>
      <div id="game-container">
        <ol id='players'>
          <Player initialName="Mostafa" symbol="X"></Player>
          <Player initialName="Yehia" symbol="O"></Player>
        </ol>

        <GameBoard></GameBoard>

      </div>

      LOG
    </main>
  )
}

export default App
