import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingContainer from "./Components/LoadingContainer/LoadingContainer.jsx";
import DataInfo from "./assets/data/data.js";
import Footer from "./Components/Footer/Footer.jsx";
import "./App.scss";

const MainPage = lazy(() => import("./Pages/MainPage/MainPage.jsx"));
const PortfolioDetail = lazy(() => import("./Pages/PortfolioDetail/PortfolioDetail.jsx"));
const NotFound = lazy(() => import("./Pages/NotFound/NotFound.jsx"));

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
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
