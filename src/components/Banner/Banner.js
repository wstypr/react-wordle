import React from "react";

function RestartButton({ handleRestart }) {
  return <button onClick={handleRestart}>Restart</button>;
}

function Banner({ type = "sad", tunrnNum = 6, answer = "", handleRestart }) {
  if (type === "happy") {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>{tunrnNum} guesses</strong>.
        </p>
        <RestartButton handleRestart={handleRestart} />
      </div>
    );
  } else {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer.toUpperCase()}</strong>.
        </p>
        <RestartButton handleRestart={handleRestart} />
      </div>
    );
  }
}

export default Banner;
