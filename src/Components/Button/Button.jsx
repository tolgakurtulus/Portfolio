import React from "react";
import "./Button.scss";

const Button = (props) => {

    const handleClick = (event) => {
      props.handleClick && props.handleClick(event.target.value);
    }

    return (
        <>
         <button value={props.value} onClick={handleClick} type="button" className={`c-button ${props.color ? props.color : ""} ${props.radius ? props.radius : ""} ${props.size ? props.size : ""}`} >{props.title}</button>
        </>
      );    
};

export default Button;
