import React from 'react';

const YourBotArmy = ({ army, releaseBot, dischargeBot }) => {
  return (
    <div className="container">
      <h2 className="my-4">Your Bot Army</h2>
      <div className="row">
        {army.map(bot => (
          <div className="col-md-4 mb-4" key={bot.id}>
            <div className="card">
              <img src={bot.avatar_url} className="card-img-top" alt={bot.name} />
              <div className="card-body">
                <h5 className="card-title">{bot.name}</h5>
                <p className="card-text">Health: {bot.health}</p>
                <p className="card-text">Damage: {bot.damage}</p>
                <p className="card-text">Armor: {bot.armor}</p>
                <p className="card-text">Class: {bot.bot_class}</p>
                <button onClick={() => releaseBot(bot)} className="btn btn-danger mr-2">Release</button>
                <button onClick={() => dischargeBot(bot)} className="btn btn-danger">Discharge</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourBotArmy;
