import React from 'react';
import BotCard from './BotCard';

function BotCollection({ bots, addBotToArmy, setSelectedBot }) {
  return (
    <div className="bot-collection">
      <h2>Bot Collection</h2>
      <div className="bot-list">
        {bots.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            addBotToArmy={addBotToArmy}
            setSelectedBot={setSelectedBot}
          />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
