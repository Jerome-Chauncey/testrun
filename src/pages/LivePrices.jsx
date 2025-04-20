import React from "react";
import Disclaimer from "../components/Disclaimer";
import Navigation from "../components/Navigation";
function LivePrices() {
  return (
    <div>
      <Disclaimer />
      <Navigation />
      <h1>Live Market Prices</h1>
      <p>This is the live market prices page.</p>
      <p>Here you can find the latest market prices for various assets.</p>
    </div>
  );
}
export default LivePrices;
