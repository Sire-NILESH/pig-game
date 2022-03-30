import React from "react";
import styles from "./Dice.module.css";

const Dice = (props) => {
  const showDice = `./assets/dice/dice-${props.diceNumber}.png`;

  return (
    <img
      src={showDice}
      alt="Playing dice"
      className={`${styles} ${
        !props.playing || props.diceNumber === 0 ? "hidden" : ""
      }`}
    />
  );
};

export default Dice;
