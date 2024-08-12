import React from 'react';
import BotCard from './BotCard';

function YourBotArmy({ army, removeBotFromArmy, deleteBot }) {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      <div className="bot-list">
        {army.map((bot) => (
          <div key={bot.id} className="bot-card">
            <img src={bot.avatar_url} alt={bot.name} />
            <h3>{bot.name}</h3>
            <button onClick={() => removeBotFromArmy(bot)}>Remove</button>
            <button onClick={() => deleteBot(bot)}>Discharge</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
