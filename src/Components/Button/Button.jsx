import React from "react";
import styles from "./styles.module.scss";

const Button = (props) => {
  const handleClick = (event) => {
    props.handleClick && props.handleClick(event.target.value);
  };

  return (
    <button
      value={props.value}
      onClick={handleClick}
      type="button"
      className={` 
        ${styles[`c-button`]} 
        ${props.color ? styles[props.color] : ""}
        `}
    >
      {props.title}
    </button>
  );
};

export default Button;
