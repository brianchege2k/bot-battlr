import React from 'react';
import { Link } from 'react-router-dom';

const BotSpecs = ({ bot, enlistBot }) => {
  return (
    <div>
      <h2>Bot Details</h2>
      <div className="card">
        <img src={bot.avatar_url} className="card-img-top" alt={bot.name} />
        <div className="card-body">
          <h5 className="card-title">{bot.name}</h5>
          <p className="card-text">Health: {bot.health}</p>
          <p className="card-text">Damage: {bot.damage}</p>
          <p className="card-text">Armor: {bot.armor}</p>
          <Link to="/" className="btn btn-primary mr-2">Back to List</Link>
          <button onClick={() => enlistBot(bot)} className="btn btn-primary">Enlist</button>
        </div>
      </div>
    </div>
  );
};

export default BotSpecs;
