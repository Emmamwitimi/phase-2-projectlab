import React, { useState, useEffect } from 'react';
import BotCollection from './componets/BotCollection';
import YourBotArmy from './componets/YourBotArmy';
import BotSpecs from './componets/BotSpecs';
import SortBar from './componets/SortBar';
import FilterBar from './componets/FilterBar';

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  const addBotToArmy = (bot) => {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const removeBotFromArmy = (bot) => {
    setArmy(army.filter((b) => b.id !== bot.id));
  };

  const deleteBot = (bot) => {
    fetch(`http://localhost:8001/bots/${bot.id}`, { method: 'DELETE' })
      .then(() => {
        setBots(bots.filter((b) => b.id !== bot.id));
        setArmy(army.filter((b) => b.id !== bot.id));
      });
  };

  return (
    <div className="App">
      <h1>Bot Battlr</h1>
      <SortBar bots={bots} setBots={setBots} />
      <FilterBar bots={bots} setBots={setBots} />
      {selectedBot ? (
        <BotSpecs
          bot={selectedBot}
          addBotToArmy={addBotToArmy}
          setSelectedBot={setSelectedBot}
        />
      ) : (
        <BotCollection
          bots={bots}
          addBotToArmy={addBotToArmy}
          setSelectedBot={setSelectedBot}
        />
      )}
      <YourBotArmy
        army={army}
        removeBotFromArmy={removeBotFromArmy}
        deleteBot={deleteBot}
      />
    </div>
  );
}

export default App;
