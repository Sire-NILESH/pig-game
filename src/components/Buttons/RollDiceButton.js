import React from "react";
// import PropTypes from "prop-types";
import styles from "./RollDiceButton.module.css";

const RollDiceButton = (props) => {
  return (
    <button className={styles["btn--roll"]} onClick={props.onClickHandler}>
      🎲 Roll dice
    </button>
  );
};

RollDiceButton.propTypes = {};

export default RollDiceButton;
