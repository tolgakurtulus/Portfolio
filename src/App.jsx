import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingContainer from "./Components/LoadingContainer";
import Footer from "./Components/Footer";
import "./App.scss";

const MainPage = lazy(() => import("./Pages/MainPage/MainPage.jsx"));
const PortfolioDetail = lazy(() => import("./Pages/PortfolioDetail"));
const NotFound = lazy(() => import("./Pages/NotFound"));

function App() {
  return (
    <div className="c-app">
      <Suspense fallback={<LoadingContainer />}>
        <Routes>
          <Route exact path="/Portfolio" element={<MainPage />} />
          <Route
            exact
            path="/Portfolio/:projectId"
            element={<PortfolioDetail />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
