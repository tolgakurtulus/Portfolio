import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage.jsx";
import PortfolioDetail from "./Pages/PortfolioDetail/PortfolioDetail.jsx";
import DataInfo from "./assets/data/data.js";

function App() {
  return (
    <div className="c-app">
      <Routes>
        <Route exact path="/Portfolio" element={<MainPage />} />
        {DataInfo.map((item) => {
          return (
            <Route
              exact
              path={`/Portfolio/${item.title}`}
              element={<PortfolioDetail item={item} />}
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
