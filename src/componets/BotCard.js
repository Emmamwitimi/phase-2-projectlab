import React from 'react';

function BotCard({ bot, addBotToArmy, setSelectedBot }) {
  return (
    <div className="bot-card" onClick={() => setSelectedBot(bot)}>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>{bot.catchphrase}</p>
      <button onClick={() => addBotToArmy(bot)}>Enlist</button>
    </div>
  );
}

export default BotCard;
