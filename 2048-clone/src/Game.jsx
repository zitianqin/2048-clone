import GameRow from "./GameRow";

const initialiseGame = () => {
  return [
    [2, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
};

function Game() {
  let gameValues = initialiseGame();

  return (
    <table className="h-[70vw] max-h-[70vh] w-[70%] max-w-[70vh]">
      <GameRow cellValues={gameValues[0]} />
      <GameRow cellValues={gameValues[1]} />
      <GameRow cellValues={gameValues[2]} />
      <GameRow cellValues={gameValues[3]} />
    </table>
  );
}

export default Game;
