import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,

  document.getElementById("root")
);

// ilk olarak npm i gh-pages --save-dev
// package.json =  "homepage": "https://tolgakurtulus.github.io/Portfolio", ve script kısmına "deploy": "gh-pages -d build", ekle
// yarn deploy ile değişiklikler yansır
