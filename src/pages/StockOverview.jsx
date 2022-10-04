import React from "react";
import AutoComplete from "../components/AutoComplete";
import StockList from "../components/StockList";
import trading from "../images/Trading.png";
const StockOverview = () => {
  return (
    <div>
      <div className="text-center">
        <img src={trading} alt="" />
      </div>
      <AutoComplete />
      <StockList />
    </div>
  );
};

export default StockOverview;
