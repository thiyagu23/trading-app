import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StockDetails from "./pages/StockDetails";
import StockOverview from "./pages/StockOverview";
import { WatchListContextProvider } from "./context/watchListContext";
const App = () => {
  return (
    <main className="container">
      <WatchListContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<StockOverview />} />
            <Route path="/detail/:symbol" element={<StockDetails />} />
          </Routes>
        </BrowserRouter>
      </WatchListContextProvider>
    </main>
  );
};

export default App;
