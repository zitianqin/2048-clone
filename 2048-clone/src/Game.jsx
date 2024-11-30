import GameRow from "./GameRow";

function Game() {
  return (
    <table className="h-[80vw] max-h-[80vh] w-[80%] max-w-[80vh]">
      <GameRow />
      <GameRow />
      <GameRow />
      <GameRow />
    </table>
  );
}

export default Game;
