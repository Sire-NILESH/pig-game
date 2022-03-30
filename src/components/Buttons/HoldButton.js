import React from "react";
import styles from "./HoldButton.module.css";

const HoldButton = (props) => {
  return (
    <button className={styles["btn--hold"]} onClick={props.onClickHandler}>
      📥 Hold
    </button>
  );
};

export default HoldButton;
