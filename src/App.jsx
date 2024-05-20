import Player from "./components/Players"
import Gameboard from "./components/GameBoard"

function App() {
  return <main>
    <div id="game-container">
      <ol id="players">
        <Player initialName="Player 1" symbol="X"/>
        <Player initialName="Player 2" symbol="O"/>
      </ol>


      <Gameboard/>

    </div>

  </main>
  

  
}

export default App
