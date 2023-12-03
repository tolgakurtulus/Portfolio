import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingContainer from "./Components/LoadingContainer";
import Footer from "./Components/Footer";

const MainPage = lazy(() => import("./Pages/MainPage/MainPage.jsx"));
const PortfolioDetail = lazy(() => import("./Pages/PortfolioDetail"));
const NotFound = lazy(() => import("./Pages/NotFound"));

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
