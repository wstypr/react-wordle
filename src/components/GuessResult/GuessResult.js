import React from "react";

import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

const COL_NUM = 5;

function GuessResult({ guessList, answer }) {
  const checkedGuessList = guessList.map((guess) => checkGuess(guess, answer));

  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((row, index) => (
        <p className="guess" key={index}>
          {range(COL_NUM).map((col, index) => (
            <span
              className={`cell ${
                checkedGuessList[row] ? checkedGuessList[row][col].status : ""
              }`}
              key={index}
            >
              {checkedGuessList[row] ? checkedGuessList[row][col].letter : ""}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default GuessResult;
