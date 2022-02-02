import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingContainer from "./Components/LoadingContainer/LoadingContainer.jsx";
import DataInfo from "./assets/data/data.js";
import "./App.scss";

const MainPage = lazy(() => import("./Pages/MainPage/MainPage.jsx"));
const PortfolioDetail = lazy(() => import("./Pages/PortfolioDetail/PortfolioDetail.jsx"));

function App() {
  return (
    <div className="c-app">
      <Suspense fallback={<LoadingContainer />}>
        <Routes>
          <Route exact path="/Portfolio" element={<MainPage />} />
          {DataInfo.map((item) => {
            return (
              <Route
                key={item}
                exact
                path={`/Portfolio/${item.titlelink}`}
                element={<PortfolioDetail item={item} />}
              />
            );
          })}
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
