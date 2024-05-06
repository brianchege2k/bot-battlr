import React, { useState, useEffect } from 'react';
import { fetchBots, deleteBot } from '../api';
import YourBotArmy from './YourBotArmy';

const BotCollection = () => {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const botData = await fetchBots();
      setBots(botData);
    };
    fetchData();
  }, []);

  const enlistBot = (bot) => {
    if (!army.some(b => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const releaseBot = (bot) => {
    const updatedArmy = army.filter(b => b.id !== bot.id);
    setArmy(updatedArmy);
  };

  const dischargeBot = async (bot) => {
    try {
      // Send request to delete bot from backend
      await deleteBot(bot.id);
      // If deletion is successful, remove bot from army in frontend
      const updatedArmy = army.filter(b => b.id !== bot.id);
      setArmy(updatedArmy);
    } catch (error) {
      console.error('Error deleting bot:', error);
    }
  };

  return (
    <div>
      <YourBotArmy army={army} releaseBot={releaseBot} dischargeBot={dischargeBot} />
      <h2>Bot Collection</h2>
      <div className="row">
        {bots.map(bot => (
          <div key={bot.id} className="col-md-3">
            <div className="card">
              <img src={bot.avatar_url} className="card-img-top" alt={bot.name} />
              <div className="card-body">
                <h5 className="card-title">{bot.name}</h5>
                <p className="card-text">Health: {bot.health}</p>
                <p className="card-text">Damage: {bot.damage}</p>
                <p className="card-text">Armor: {bot.armor}</p>
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
