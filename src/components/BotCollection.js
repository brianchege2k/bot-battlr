import React, { useState, useEffect } from 'react';

const BotCollection = ({ enlistBot }) => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/bots')
      .then(response => response.json())
      .then(data => setBots(data.bots))
      .catch(error => console.error('Error fetching bots:', error));
  }, []);

  return (
    <div className="container">
      <h2 className="my-4">Bot Collection</h2>
      <div className="row">
        {bots.map(bot => (
          <div className="col-md-4 mb-4" key={bot.id}>
            <div className="card">
              <img src={bot.avatar_url} className="card-img-top" alt={bot.name} />
              <div className="card-body">
                <h5 className="card-title">{bot.name}</h5>
                <p className="card-text">Health: {bot.health}</p>
                <p className="card-text">Damage: {bot.damage}</p>
                <p className="card-text">Armor: {bot.armor}</p>
                <p className="card-text">Class: {bot.bot_class}</p>
                <button onClick={() => enlistBot(bot)} className="btn btn-primary">Enlist</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BotCollection;
