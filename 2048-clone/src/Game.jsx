import GameRow from "./GameRow";

function Game() {
  return (
    <table className="h-[70vw] max-h-[70vh] w-[70%] max-w-[70vh]">
      <GameRow />
      <GameRow />
      <GameRow />
      <GameRow />
    </table>
  );
}

export default Game;
