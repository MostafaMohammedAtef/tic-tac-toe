import Player from "./components/Player"
function App() {
  

  return (
    <main>
      <div id="game-container">
        <ol id='players'>
          <Player name="Mostafa" symbol="X"></Player>
          <Player name="Yehia" symbol="O"></Player>
        </ol>

        GAME BOARD

      </div>

      LOG
    </main>
  )
}

export default App
