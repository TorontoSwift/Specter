import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TradeList = () => {
  const [trades, setTrades] = useState([]);

  useEffect(() => {
    const fetchTrades = async () => {
      try {
        const response = await axios.get('/api/trades/');
        setTrades(response.data);
      } catch (error) {
        // Handle error
      }
    };

    fetchTrades();
  }, []);

  return (
    <div>
      <h2>Trade List</h2>
      <ul>
        {trades.map(trade => (
          <li key={trade.id}>{trade.symbol} - {trade.entryPrice} to {trade.exitPrice}</li>
        ))}
      </ul>
    </div>
  );
};

export default TradeList;
