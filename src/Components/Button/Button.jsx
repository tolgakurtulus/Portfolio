import React from "react";
import "./Button.scss";

const Button = (props) => {
    return (
        <>
         <button type="button" className={`c-button ${props.color ? props.color : ""}`} >{props.title}</button>
        </>
      );    
};

export default Button;
