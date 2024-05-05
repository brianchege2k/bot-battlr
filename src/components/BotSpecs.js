import React from 'react';
import { Link } from 'react-router-dom';

const BotSpecs = ({ bot, enlistBot }) => {
  return (
    <div className="container">
      <h2 className="my-4">Bot Specs</h2>
      <div className="card">
        <img src={bot.avatar_url} className="card-img-top" alt={bot.name} />
        <div className="card-body">
          <h5 className="card-title">{bot.name}</h5>
          <p className="card-text">Health: {bot.health}</p>
          <p className="card-text">Damage: {bot.damage}</p>
          <p className="card-text">Armor: {bot.armor}</p>
          <p className="card-text">Class: {bot.bot_class}</p>
          <button onClick={() => enlistBot(bot)} className="btn btn-primary mr-2">Enlist</button>
          <Link to="/bots" className="btn btn-secondary">Back to Bot Collection</Link>
        </div>
      </div>
    </div>
  );
};

export default BotSpecs;
