import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingContainer from "./Components/LoadingContainer";
import Footer from "./Components/Footer";
import { projectData } from "./db/index.js";
import "./App.scss";

const MainPage = lazy(() => import("./Pages/MainPage/MainPage.jsx"));
const PortfolioDetail = lazy(() => import("./Pages/PortfolioDetail"));
const NotFound = lazy(() => import("./Pages/NotFound/NotFound.jsx"));

function App() {
  return (
    <div className="c-app">
      <Suspense fallback={<LoadingContainer />}>
        <Routes>
          <Route exact path="/Portfolio" element={<MainPage />} />
          {projectData.map((item) => {
            return (
              <Route
                key={item}
                exact
                path={`/Portfolio/${item.titlelink}`}
                element={<PortfolioDetail item={item} />}
              />
            );
          })}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
