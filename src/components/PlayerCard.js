import React from "react";
import styles from "./PlayerCard.module.css";

const PlayerCard = (props) => {
  return (
    <section
      className={`${styles["player"]} ${
        props.active && styles["player--active"]
      } ${props.winnerStatus === props.user ? styles["player--winner"] : ""}
       `}
    >
      <h2 className={`${styles["name"]}`}>
        {" "}
        {props.winnerStatus === props.user && "👑"} Player {props.user}
      </h2>
      <p className={`${styles["score"]}`}>{props.score}</p>
      <div className={`${styles["current"]}`}>
        <p className={`${styles["current-label"]}`}>Current</p>
        <p className={`${styles["current-score"]}`}>{props.currentScore}</p>
      </div>
    </section>
  );
};

export default PlayerCard;
