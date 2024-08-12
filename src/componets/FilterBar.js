import React from 'react';

function FilterBar({ bots, setBots }) {
  const filterBots = (botClass) => {
    const filteredBots = bots.filter((bot) => bot.bot_class === botClass);
    setBots(filteredBots);
  };

  const resetFilter = () => {
    fetch('http://localhost:8001/bots')
      .then((response) => response.json())
      .then((data) => setBots(data));
  };

  return (
    <div className="filter-bar">
      <button onClick={() => filterBots('Support')}>Support</button>
      <button onClick={() => filterBots('Medic')}>Medic</button>
      <button onClick={() => filterBots('Assault')}>Assault</button>
      <button onClick={() => filterBots('Defender')}>Defender</button>
      <button onClick={() => filterBots('Captain')}>Captain</button>
      <button onClick={() => filterBots('Witch')}>Witch</button>
      <button onClick={resetFilter}>Reset Filter</button>
    </div>
  );
}

export default FilterBar;
