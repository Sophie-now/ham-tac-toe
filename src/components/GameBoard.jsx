const gameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = ({ onSelectBox, turns }) => {
  for (const turn of turns) {
    const rowIdx = turn.square.row;
    const colIdx = turn.square.col;
    // gameBoard 에 업데이트
    gameBoard[rowIdx][colIdx] = turn.player;
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIdx) => (
        <li key={rowIdx}>
          <ol>
            {row.map((playerSymbol, colIdx) => (
              <li key={colIdx}>
                <button
                  onClick={() => onSelectBox(rowIdx, colIdx)}
                  // disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};
export default GameBoard;
