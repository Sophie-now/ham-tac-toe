import { GameBoard } from "./components/GameBoard";
import Player from "./components/player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="player 1" symbol="O" />
          <Player name="player 2" symbol="X" />
        </ol>
        <GameBoard />
      </div>
    </main>
  );
}

export default App;
