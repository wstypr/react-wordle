import React from "react";

function GuessInput({ handleAddGuessList, isDisabled }) {
  const [guessInput, setGuessInput] = React.useState("");

  const handleChangeGuess = (guessInput) => {
    // abort if word length more than 5 chars
    if (guessInput.length > 5) return;

    // abort if there is non alphabet char
    if (!guessInput.match(/^[A-Z]*$/i)) return;

    setGuessInput(guessInput.toUpperCase());
  };

  const handleSubmitGuess = () => {
    // prevent submitting empty string
    if (guessInput.length === 0) return;

    handleAddGuessList(guessInput);
    setGuessInput("");
  };

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmitGuess();
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        pattern="[A-Za-z]{5}"
        title="5 letter word"
        value={guessInput}
        onChange={(event) => handleChangeGuess(event.target.value)}
        disabled={isDisabled}
      />
    </form>
  );
}

export default GuessInput;
