import GameCell from "./GameCell";

function GameRow() {
  return (
    <tr className="w-full h-[25%]">
      <GameCell />
      <GameCell />
      <GameCell />
      <GameCell />
    </tr>
  );
}

export default GameRow;
