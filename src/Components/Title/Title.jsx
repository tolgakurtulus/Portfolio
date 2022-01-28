import React from "react";
import "./Title.scss";

const Title = (props) => {
  console.log("~ props", props);
  return (
    <div className="c-title">
      <h2>{props.title}</h2>
    </div>
  );
};

export default Title;
