import React, { lazy, Suspense } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import LoadingContainer from "./Components/LoadingContainer";
import Footer from "./Components/Footer";

const MainPage = lazy(() => import("./Pages/MainPage/MainPage.jsx"));
const PortfolioDetail = lazy(() => import("./Pages/PortfolioDetail"));
const NotFound = lazy(() => import("./Pages/NotFound"));

function App() {
  return (
    <HashRouter>
      <Suspense fallback={<LoadingContainer />}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/:projectId" element={<PortfolioDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Suspense>
    </HashRouter>
  );
}

export default App;
