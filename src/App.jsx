import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

// 다음 플레이어를 지정하는 함수
const derivePlayer = (prevPlayer) => {
  return prevPlayer === "X" ? "O" : "X";
};

function App() {
  // gameLog & GamdBoard
  const [gameTurns, setGameTurns] = useState([]);

  const curPlayer = derivePlayer(gameTurns[0]?.player);

  const handleSelectBox = (rowIdx, colIdx) => {
    //이전에 누른 기록이 있는 인덱스에 다시 클릭 시도 -> alert
    // gameTurns에 누른 기록이 있는 인덱스에 다시 클릭 시도 -> alert
    // gameTurns.square.row가 rowIdx와 동일하고, gameTurns.square.col이 colIdx와 동일한 기록이 있으면 alert로 띄운다.
    // gameTurns의 클릭 기록을 업데이트해서도 안 된다.

    for (let i = 0; i < gameTurns.length; i++) {
      const turn = gameTurns[i];
      if (turn.square.row == rowIdx && turn.square.col == colIdx) {
        alert("중복 입력 금지");
        // handleSelectBox함수를 종료시켜 setGameTurns가 실행되지 못하는 원리
        return;
      }
    }

    setGameTurns((prevTurns) => {
      const updatedTurns = [
        {
          square: { row: rowIdx, col: colIdx },
          player: derivePlayer(prevTurns[0]?.player),
        },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="player 1" symbol="X" isActive={curPlayer === "X"} />
          <Player name="player 2" symbol="O" isActive={curPlayer === "O"} />
        </ol>
        <GameBoard onSelectBox={handleSelectBox} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
