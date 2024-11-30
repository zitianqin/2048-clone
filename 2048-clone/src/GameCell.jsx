import styled from "styled-components";
import PropTypes from "prop-types";

const StyledGameCell = styled.td`
  background-color: ${(props) => props.$bgColour};
`;

function GameCell({ value }) {
  let bgColour;
  switch (value) {
    case 1:
      bgColour = "white";
      break;
    case 2:
      bgColour = "yellow";
      break;
    case 4:
      bgColour = "orange";
      break;
    case 8:
      bgColour = "green";
      break;
    case 16:
      bgColour = "blue";
      break;
    case 32:
      bgColour = "purple";
      break;
    case 64:
      bgColour = "red";
      break;
    case 128:
      bgColour = "white";
      break;
    case 256:
      bgColour = "yellow";
      break;
    case 512:
      bgColour = "orange";
      break;
    case 1024:
      bgColour = "green";
      break;
    case 2048:
      bgColour = "blue";
      break;
    default:
      bgColour = "white";
  }

  return (
    <StyledGameCell $bgColour={bgColour} className="w-[25%] border-solid border-[10px] text-center text-4xl font-bold">
      {value !== 0 ? value : ""}
    </StyledGameCell>
  );
}

GameCell.propTypes = {
  value: PropTypes.number.isRequired,
};

export default GameCell;
