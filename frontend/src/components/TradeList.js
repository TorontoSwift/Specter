import React, { useEffect, useState } from 'react';
import api from '../api';

const TradeList = () => {
  const [trades, setTrades] = useState([]);

  useEffect(() => {
    const fetchTrades = async () => {
      try {
        const response = await api.get('/trades/');
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
          <li key={trade.id}>
            {trade.symbol} - Entry: {trade.entryPrice}, Exit: {trade.exitPrice}, Quantity: {trade.quantity}, Strategy: {trade.strategy}, Date: {trade.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TradeList;
