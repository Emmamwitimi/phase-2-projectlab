import React from 'react';

function BotSpecs({ bot, addBotToArmy, setSelectedBot }) {
  return (
    <div className="bot-specs">
      <h2>{bot.name}</h2>
      <img src={bot.avatar_url} alt={bot.name} />
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Class: {bot.bot_class}</p>
      <p>{bot.catchphrase}</p>
      <button onClick={() => addBotToArmy(bot)}>Enlist</button>
      <button onClick={() => setSelectedBot(null)}>Back to list</button>
    </div>
  );
}

export default BotSpecs;
