import GameCell from "./GameCell";
import PropTypes from "prop-types";

function GameRow({ cellValues }) {
  return (
    <tr className="w-full h-[25%]">
      <GameCell value={cellValues[0]} />
      <GameCell value={cellValues[1]} />
      <GameCell value={cellValues[2]} />
      <GameCell value={cellValues[3]} />
    </tr>
  );
}

GameRow.propTypes = {
  cellValues: PropTypes.array.isRequired,
};

export default GameRow;
