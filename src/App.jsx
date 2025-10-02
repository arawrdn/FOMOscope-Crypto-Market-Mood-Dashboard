import React from "react";
import Header from "./components/Header";
import SentimentGauge from "./components/SentimentGauge";
import PriceChart from "./components/PriceChart";

export default function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <Header />
      <SentimentGauge />
      <PriceChart />
    </div>
  );
}
