import React from 'react';
import TradeEntry from './components/TradeEntry';
import TradeList from './components/TradeList';

const App = () => {
  return (
    <div className="App">
      <h1>Trade Journal</h1>
      <TradeEntry />
      <TradeList />
    </div>
  );
};

export default App;
