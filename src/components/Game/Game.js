import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import GuessInput from "../GuessInput";
import GuessResult from "../GuessResult";
import Banner from "../Banner";

// To make debugging easier, we'll log the solution in the console.

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [answer, setAnswer] = React.useState(sample(WORDS));
  // console.info({ answer });
  const [gameStatus, setGameStatus] = React.useState("play");

  const handleRestart = () => {
    setGuessList([]);
    setAnswer(sample(WORDS));
    setGameStatus("play");
  };

  const handleAddGuessList = (newGuess) => {
    // stop add guess into the list if already there are 6 guesses
    if (guessList.length >= 6) return;
    const nextGuessList = [...guessList, newGuess];

    setGuessList(nextGuessList);

    // evaluate answer
    if (newGuess === answer) {
      setGameStatus("win");
    } else if (nextGuessList.length === NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lose");
    }
  };

  return (
    <>
      <GuessResult guessList={guessList} answer={answer} />
      <GuessInput
        handleAddGuessList={handleAddGuessList}
        isDisabled={gameStatus !== "play"}
      />
      {gameStatus === "win" && (
        <Banner
          type="happy"
          tunrnNum={guessList.length}
          handleRestart={handleRestart}
        />
      )}

      {gameStatus === "lose" && <Banner type="sad" answer={answer} />}
    </>
  );
}

export default Game;
