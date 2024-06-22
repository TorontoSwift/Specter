import React, { useState } from 'react';
import axios from 'axios';

const TradeEntry = () => {
  const [trade, setTrade] = useState({
    symbol: '',
    entryPrice: '',
    exitPrice: '',
    quantity: '',
    strategy: '',
    date: '',
  });

  const handleChange = (e) => {
    setTrade({ ...trade, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/trades/', trade);
      // Handle success (e.g., show notification, reset form)
    } catch (error) {
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="symbol" value={trade.symbol} onChange={handleChange} placeholder="Symbol" />
      <input name="entryPrice" value={trade.entryPrice} onChange={handleChange} placeholder="Entry Price" />
      <input name="exitPrice" value={trade.exitPrice} onChange={handleChange} placeholder="Exit Price" />
      <input name="quantity" value={trade.quantity} onChange={handleChange} placeholder="Quantity" />
      <input name="strategy" value={trade.strategy} onChange={handleChange} placeholder="Strategy" />
      <input name="date" type="date" value={trade.date} onChange={handleChange} />
      <button type="submit">Log Trade</button>
    </form>
  );
};

export default TradeEntry;
