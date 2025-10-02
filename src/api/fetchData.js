import axios from "axios";

export const getCryptoPrice = async (symbol = "bitcoin") => {
  const url = `https://api.coingecko.com/api/v3/simple/price?ids=${symbol.toLowerCase()}&vs_currencies=usd`;
  const res = await axios.get(url);
  return res.data[symbol.toLowerCase()].usd;
};

export const getSentimentScore = async () => {
  // Placeholder: random sentiment between -1 to 1
  return (Math.random() * 2 - 1).toFixed(2);
};
