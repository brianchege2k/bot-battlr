import React from 'react';

const SortBar = ({ sortBots }) => {
  return (
    <div className="container">
      <div className="btn-group my-4">
        <button className="btn btn-secondary" onClick={() => sortBots('health')}>Sort by Health</button>
        <button className="btn btn-secondary" onClick={() => sortBots('damage')}>Sort by Damage</button>
        <button className="btn btn-secondary" onClick={() => sortBots('armor')}>Sort by Armor</button>
      </div>
    </div>
  );
};

export default SortBar;
