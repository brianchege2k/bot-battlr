import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchBots, deleteBot } from '../api';
import YourBotArmy from './YourBotArmy';
import SortBar from './SortBar';
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
      alert(`You have enlisted ${bot.name} to your army!`);
    }
  };

  const releaseBot = (bot) => {
    const updatedArmy = army.filter(b => b.id !== bot.id);
    setArmy(updatedArmy);
  };

  const dischargeBot = async (bot) => {
    try {
      await deleteBot(bot.id);
      const updatedArmy = army.filter(b => b.id !== bot.id);
      setArmy(updatedArmy);
    } catch (error) {
      console.error('Error deleting bot:', error);
    }
  };

  const sortBots = (criteria) => {
    const sortedBots = [...bots].sort((a, b) => a[criteria] - b[criteria]);
    setBots(sortedBots);
  };

  return (
    <div>
      <YourBotArmy army={army} releaseBot={releaseBot} dischargeBot={dischargeBot} />
      <h2>Bot Collection</h2>
      <SortBar sortBots={sortBots} />
      <div className="row">
        {bots.map(bot => (
          <div key={bot.id} className="col-md-3">
            <div className="card mb-3">
            <Link to={`/bots/${bot.id}`}>
              <img src={bot.avatar_url} className="card-img-top" alt={bot.name} />
              </Link>
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
