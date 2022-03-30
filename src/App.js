import { useState, useEffect } from "react";
import Main from "./components/Main";
import RollDiceButton from "./components/Buttons/RollDiceButton";
import StartNewGameButton from "./components/Buttons/StartNewGameButton";
import HoldButton from "./components/Buttons/HoldButton";
import PlayerCard from "./components/PlayerCard";
import Dice from "./components/Dice";
import "./App.css";

function App() {
  const [scores0, setScores0] = useState(0);
  const [scores1, setScores1] = useState(0);
  const [winner, setWinner] = useState(3);
  const [currentScore, setCurrentScore] = useState(0);
  const [activePlayer, setActivePlayer] = useState(0);
  const [diceNumber, setDiceNumber] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [newGame, setNewGame] = useState(0);
  const scoreLimit = 100;

  useEffect(() => {
    setScores0(0);
    setScores1(0);
    setWinner(3);
    setCurrentScore(0);
    setActivePlayer(0);
    setDiceNumber(0);
    setPlaying(true);
  }, [newGame]);

  const rollDiceHandler = () => {
    if (playing) {
      // 1. Generating a random dice roll
      const dice = Math.trunc(Math.random() * 6) + 1;
      setDiceNumber(dice);

      if (dice !== 1) {
        setCurrentScore((prevCurrentScore) => prevCurrentScore + dice);
      } else {
        // Switch to next player
        setCurrentScore(0);
        setActivePlayer((prevActivePlayer) => (prevActivePlayer === 0 ? 1 : 0));
      }
    }
  };

  const holdHandler = () => {
    if (playing) {
      //make the current score the score of the active player
      let tempScore0 = 0; //because we had problems with state updates not being available so quick
      let tempScore1 = 0;
      if (activePlayer === 0) {
        tempScore0 = scores0 + currentScore;
        setScores0((prevScore) => prevScore + currentScore);
        setCurrentScore(0);
      } else {
        tempScore1 = scores1 + currentScore;
        setScores1((prevScore) => prevScore + currentScore);
        setCurrentScore(0);
      }

      // if (scores0 >= 10 || scores1 >= 10)
      if (tempScore0 >= scoreLimit || tempScore1 >= scoreLimit) {
        //we have our winner
        const playerWon = activePlayer + 1;
        setWinner(playerWon);
        //reset the dice and hide it
        setPlaying(false);
        setDiceNumber(0);
      } else {
        // Switch to next player
        setCurrentScore(0);
        setActivePlayer((prevActivePlayer) => (prevActivePlayer === 0 ? 1 : 0));
      }
    }
  };

  const newGameHandler = () => {
    setNewGame((prevNewGame) => prevNewGame + 1);
  };

  return (
    <>
      <h1 className="winning_description">
        {winner === 3 ? `Score ${scoreLimit} to win 👑` : "Congratulations 🎉"}
      </h1>
      <Main>
        <PlayerCard
          user={1}
          score={scores0}
          currentScore={activePlayer === 0 ? currentScore : 0}
          active={activePlayer === 0 ? true : false}
          winnerStatus={winner}
        ></PlayerCard>
        <Dice playing={playing} diceNumber={diceNumber} />
        <PlayerCard
          user={2}
          score={scores1}
          currentScore={activePlayer === 1 ? currentScore : 0}
          active={activePlayer === 1 ? true : false}
          winnerStatus={winner}
        ></PlayerCard>
        <StartNewGameButton
          onClickHandler={newGameHandler}
        ></StartNewGameButton>
        <RollDiceButton onClickHandler={rollDiceHandler}></RollDiceButton>
        <HoldButton onClickHandler={holdHandler}></HoldButton>
      </Main>
    </>
  );
}

export default App;
