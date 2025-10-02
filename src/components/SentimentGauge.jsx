import React, { useEffect, useState } from "react";
import { getSentimentScore } from "../api/fetchData";

export default function SentimentGauge() {
  const [score, setScore] = useState(0);

  useEffect(() => {
    const interval = setInterval(async () => {
      const newScore = await getSentimentScore();
      setScore(newScore);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const mood = score > 0 ? "🐂 Bullish" : score < 0 ? "🐻 Bearish" : "😐 Neutral";

  return (
    <div style={{ fontSize: "2rem", textAlign: "center", margin: "20px" }}>
      Market Mood: {mood} ({score})
    </div>
  );
}
