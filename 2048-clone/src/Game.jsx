import GameRow from "./GameRow";
import { useState, useEffect } from "react";

const initialiseGame = () => {
  return [
    [2, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
};

const slideLeft = (gameValues, merge = true) => {
  // Move everything left
  const board = [...gameValues];
  for (let row in gameValues) {
    const nonZeroRow = [];
    for (let col of gameValues[row]) {
      if (col !== 0) {
        nonZeroRow.push(col);
      }
    }

    board[row] = [...nonZeroRow];
    while (board[row].length !== 4) {
      board[row].push(0);
    }
  }

  if (merge) {
    // Merge adjacent tiles that have the same value
    console.log(merge);
    for (let row in board) {
      if (board[row][0] === board[row][1]) {
        board[row][0] = board[row][0] * 2;
        board[row][1] = 0;
      }

      if (board[row][1] === board[row][2]) {
        board[row][1] = board[row][1] * 2;
        board[row][2] = 0;
      }

      if (board[row][2] === board[row][3]) {
        board[row][2] = board[row][2] * 2;
        board[row][3] = 0;
      }
    }

    return slideLeft(board, false);
  }

  return board;
};

const slideRight = (gameValues, merge = true) => {
  // Move everything right
  const board = [...gameValues];
  for (let row in gameValues) {
    const nonZeroRow = [];
    for (let col of gameValues[row]) {
      if (col !== 0) {
        nonZeroRow.push(col);
      }
    }

    board[row] = [];
    while (board[row].length !== 4 - nonZeroRow.length) {
      board[row].push(0);
    }
    board[row].push(...nonZeroRow);
  }

  if (merge) {
    // Merge adjacent tiles that have the same value
    console.log(merge);
    for (let row in board) {
      if (board[row][0] === board[row][1]) {
        board[row][0] = board[row][0] * 2;
        board[row][1] = 0;
      }

      if (board[row][1] === board[row][2]) {
        board[row][1] = board[row][1] * 2;
        board[row][2] = 0;
      }

      if (board[row][2] === board[row][3]) {
        board[row][2] = board[row][2] * 2;
        board[row][3] = 0;
      }
    }

    return slideRight(board, false);
  }

  return board;
};

const transpose = (matrix) => {
  return matrix[0].map((col, i) => matrix.map((row) => row[i]));
};

const slideUp = (gameValues) => {
  return transpose(slideLeft(transpose(gameValues)));
};

const slideDown = (gameValues) => {
  return transpose(slideRight(transpose(gameValues)));
};

// Exclusive max
const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.ceil(max));
};

const addRandomNumber = (gameValues) => {
  const newGameValues = [...gameValues];

  let numZeros = 0;
  for (let row of newGameValues) {
    for (let col of row) {
      if (col === 0) numZeros++;
    }
  }

  if (numZeros === 0) {
    return;
  }

  const insertionIndex = getRandomInt(numZeros);
  let count = 0;
  for (let row in newGameValues) {
    for (let col in newGameValues[row]) {
      if (newGameValues[row][col] === 0) {
        if (count === insertionIndex) {
          newGameValues[row][col] = Math.random() < 0.5 ? 2 : 4;
          return newGameValues;
        }

        count++;
      }
    }
  }

  return newGameValues;
};

function Game() {
  const [gameValues, setGameValues] = useState(initialiseGame());

  useEffect(() => {
    const handleKeyDown = (event) => {
      let newGameValues = [...gameValues];

      switch (event.key) {
        case "ArrowLeft":
          newGameValues = slideLeft(newGameValues);
          break;
        case "ArrowRight":
          newGameValues = slideRight(newGameValues);
          break;
        case "ArrowUp":
          newGameValues = slideUp(newGameValues);
          break;
        case "ArrowDown":
          newGameValues = slideDown(newGameValues);
          break;
        default:
          return;
      }

      if (JSON.stringify(newGameValues) !== JSON.stringify(gameValues)) {
        newGameValues = addRandomNumber(newGameValues);
        setGameValues(newGameValues);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [gameValues]);

  return (
    <table className="h-[70vw] max-h-[70vh] w-[70%] max-w-[70vh]">
      <tbody>
        <GameRow cellValues={gameValues[0]} />
        <GameRow cellValues={gameValues[1]} />
        <GameRow cellValues={gameValues[2]} />
        <GameRow cellValues={gameValues[3]} />
      </tbody>
    </table>
  );
}

export default Game;
