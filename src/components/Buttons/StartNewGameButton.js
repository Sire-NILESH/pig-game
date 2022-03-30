import React from "react";
import styles from "./StartNewGameButton.module.css";

const StartNewGameButton = (props) => {
  return (
    <button className={styles["btn--new"]} onClick={props.onClickHandler}>
      🔄 New game
    </button>
  );
};

export default StartNewGameButton;
