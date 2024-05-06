import React from 'react';

const YourBotArmy = ({ army, releaseBot, dischargeBot }) => {
  return (
    <div>
      <h2>Your Bot Army</h2>
      <div className="row">
        {army.map(bot => (
          <div key={bot.id} className="col-md-3 mb-3">
            <div className="card">
              <img src={bot.avatar_url} className="card-img-top" alt={bot.name} />
              <div className="card-body">
                <h5 className="card-title">{bot.name}</h5>
                <p className="card-text">Health: {bot.health}</p>
                <p className="card-text">Damage: {bot.damage}</p>
                <p className="card-text">Armor: {bot.armor}</p>
                <button onClick={() => releaseBot(bot)} className="btn btn-danger mr-2">Release</button>
                <button onClick={() => dischargeBot(bot)} className="btn btn-danger">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourBotArmy;
